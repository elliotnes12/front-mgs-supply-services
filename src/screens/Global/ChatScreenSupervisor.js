import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFormik } from "formik";
import { ScrollView, Text } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { HeaderChat } from "../../components/core/HeaderChat";
import { LoadingScreen } from "../../components/core/LoadingScreen";
import { AlertConfirm } from "../../components/core/Modal/AlertConfirm";
import {
  initialValues,
  validationSchema,
} from "../../components/core/chat/ChatForm.form";
import { ListMessages } from "../../components/core/chat/ListMessages";
import { useAuth } from "../../modules/Auth/hooks";
import { Chat } from "../../modules/chat/api/Chat";
import { ChatMessage } from "../../modules/chat/api/chatMessage";
import { UnreadMessages } from "../../modules/chat/api/unreadMessages";
import { ENV, socket } from "../../utils";
import { Color } from "../../utils/constantsStyle";
import StyledText from "../../utils/globalstyle";
import { getIconById } from "../../utils/util";
import { styles } from "./styles/ChatScreen.style";
import * as ImagePicker from 'expo-image-picker';


export function ChatScreenSupervisor() {
  const {accessToken, user} = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuSettings, setIsMenuSettings] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [questions] = useState([
    "What type of cleaning service is required for this job?",
    "When and where do you need the service?",
    "Is the cleaning service urgent?",
    "What are the specific cleaning tasks that need to be completed?",
    "How many cleaning staff will be assigned to the job?",
  ]);
  const [optionsSettings] = useState(["Delete Chat", "Settings"]);
  const {chatId, userName} = route.params;
  const [messages, setMessages] = useState([]);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const chatController = new Chat();
  const chatMessageController = new ChatMessage();
  const [loading, setLoading] = useState(false)
  const unreadMessagesController = new UnreadMessages();


  const openCloseDelete = () => setShowDelete(prevState => !prevState);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleMenuSettings = option => {
    if (option === "Delete Chat") {
      setShowDelete(true);
    }
    setIsMenuSettings(!isMenuSettings);
  };

  const handleQuestionSelect = question => {
    setIsMenuVisible(false);
    (async () => {
      try {
        await chatMessageController.sendText(accessToken, chatId, question);
      } catch (error) {}

    })();
  };

  const handleClickOutside = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }

    if (isMenuSettings) {
      setIsMenuSettings(false);
    }
  };

  const newMessage = msg => {
    setMessages(prevMessages => [...prevMessages, msg]);
  };

  const deleteChat = async () => {
    try {
      await chatController.deleteChat(accessToken, chatId);
      openCloseDelete();
      navigation.goBack();
    } catch (e) {
      console.error(e);
    }
  };


  const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });


    if (!result.canceled) {
      const selectedPhotos = result.assets.map(asset => asset.uri);
      setPhotos(prevPhotos => [...prevPhotos, ...selectedPhotos]);
      setIsModalVisible(true);
    }
  };


  const openCamera = async () => {
    console.log("Opening camera...");
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        const selectedPhotos = result.assets.map(asset => asset.uri);
        setPhotos(prevPhotos => [...prevPhotos, ...selectedPhotos]);
      }
    } catch (error) {
      console.error("Error launching camera: ", error);
    }
  };

  useEffect(() => {
    const showKeyboardSub = Keyboard.addListener("keyboardDidShow", e => {
      const {startCoordinates} = e;

      if (Platform.OS === "ios") {
        setKeyboardHeight(startCoordinates?.height + 65);
      }
    });

    return () => showKeyboardSub.remove();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const { data } = await chatMessageController.getAll(
          accessToken,
          chatId
        );

        if (data?.messages) {

          setMessages(data.messages);
          unreadMessagesController.setTotalReadMessages(
            chatId,
            data.total
          );
        }


      } catch (error) {
      } finally {
        setLoading(false)
      }
    })();

  }, [chatId]);

  useEffect(() => {
    if (!socket) {
      console.error("Socket not initialized");
      return;
    }
    socket.emit("subscribe", chatId);
    socket.on("message", newMessage);

    return () => {
      socket.emit("unsubscribe", chatId);
      socket.off("message", newMessage);
    };
  }, [chatId]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async formValue => {
      try {
        await chatMessageController.sendText(
          accessToken,
          chatId,
          formValue.message
        );

        formik.handleReset();
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (loading) return <LoadingScreen />;

  return (
    <>
      <TouchableWithoutFeedback onPress={handleClickOutside}>
        <View style={{position: "relative", flexGrow: 1}}>
          <HeaderChat fnMenu={toggleMenuSettings} userName={userName} />
          {isMenuSettings && (
            <View style={styles.menuChat}>
              {optionsSettings.map((option, index) => (
                <TouchableOpacity
                  style={
                    index !== optionsSettings.length - 1
                      ? styles.menuChat__item
                      : ""
                  }
                  key={index}
                  onPress={() => toggleMenuSettings(option)}
                >
                  <Text style={styles.menuChat__option}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View style={{ flex: 1, backgroundColor: "#f1eee9" }}>

            <ListMessages messages={messages} />
              <View
              style={{
                  flexDirection: "row",
                  height: 50,
                  position: "absolute",
                  bottom: 20,
                left: 10,
                  width: "95%",
                }}
              >
                <View style={styles.mensaje}>
                  <TouchableOpacity
                    style={{marginHorizontal: 15, width: 25, height: 25}}
                  >
                    {getIconById("iconSuitCaseEmoji")}
                  </TouchableOpacity>
                  <TextInput
                    placeholder="Message"
                    style={styles.mensaje__input}
                    value={formik.values.message}
                    onChangeText={text => formik.setFieldValue("message", text)}
                    onEndEditing={!formik.isSubmitting && formik.handleSubmit}
                    returnKeyType="send"
                  />
                  <View style={styles.contente__icons}>
                    <TouchableOpacity
                    onPress={() => openGallery()}
                      style={{width: 28, height: 28, marginRight: 15}}>
                    {getIconById("iconClip")}
                    </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => openCamera()}
                    style={{ width: 25, height: 25 }}>
                    {getIconById("iconCamera")}
                    </TouchableOpacity>
                  </View>
                </View>
              {user.role.name != ENV.TYPES_USERS.EMPLOYEE && (
                  <>
                    <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: 65,
                        marginTop: 5,
                      }}
                    >
                      <TouchableOpacity
                        onPress={toggleMenu}
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 22.5,
                          marginRight: 10,
                        }}
                      >
                        <LinearGradient
                        style={styles.btn_questions}
                          colors={["#CEDC39", "#7DA74D"]}
                        >
                        {getIconById("iconQuestion")}
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </>
              )}
            </View>
            {isMenuVisible && (
              <ScrollView
                style={styles.menu__questions}
              >
                <View style={{ paddingBottom: 50 }}>
                  {questions.map((question, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleQuestionSelect(question)}
                      style={{
                        padding: 14,
                        backgroundColor: Color.colorWhitesmoke_100,
                        marginBottom: 5,
                      }}
                    >
                      <StyledText>{question}</StyledText>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>

      <AlertConfirm
        show={showDelete}
        type={"info"}
        onClose={openCloseDelete}
        textConfirm="Delete"
        onConfirm={() => deleteChat()}
        message="Are you sure you want to delete the chat?"
        isDanger
      />
    </>
  );
}
