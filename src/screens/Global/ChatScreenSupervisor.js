import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFormik } from "formik";
import { Text } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { assets } from "../../assets";
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
import { socket } from "../../utils";
import { Color } from "../../utils/constantsStyle";
import { styles } from "./styles/ChatScreen.style";

export function ChatScreenSupervisor() {
  const {accessToken, user} = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuSettings, setIsMenuSettings] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [questions] = useState([
    "What service do you need?",
    "How can we help you?",
    "We have services available for you?",
  ]);
  const [optionsSettings] = useState(["Delete Chat", "Settings"]);
  const {chatId, userName} = route.params;
  const [messages, setMessages] = useState(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const chatController = new Chat();
  const chatMessageController = new ChatMessage();
  const [inputValue, setInputValue] = useState("");
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
    (async () => {
      try {
        await chatMessageController.sendText(accessToken, chatId, question);
      } catch (error) {}
      setIsMenuVisible(false);
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
        const {data} = await chatMessageController.getAll(
          accessToken,
          chatId
        );
        
        setMessages(data.messages);
        unreadMessagesController.setTotalReadMessages(
          chatId,
          data.total
        );

      } catch (error) {
        console.error(error);
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

  if (!messages) return <LoadingScreen />;

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
          <View style={{display: "flex", flex: 1, backgroundColor: "#f1eee9"}}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                backgroundColor: "transparent",
                position: "relative",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flex: 1,
                  marginBottom: 90,
                  paddingTop: 40,
                  position: "relative",
                }}
              >
                <ListMessages messages={messages} />
              </View>
              <View
                style={{
                  display: "flex",
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
                      style={{width: 28, height: 28, marginRight: 15}}>
                      <Image
                        alt="icon clip"
                        style={{width: "100%", height: "100%"}}
                        source={assets.image.png.iconClip}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 25, height: 25}}>
                      <Image
                        alt="icon camera"
                        style={{width: "100%", height: "100%"}}
                        source={assets.image.png.iconCamera}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {user.role.name != "employee" && (
                  <>
                    <View
                      style={{
                        display: "flex",
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
                          style={{
                            width: "100%",
                            height: "100%",
                            padding: 8,
                            borderRadius: 22.5,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          colors={["#CEDC39", "#7DA74D"]}
                        >
                          <Image
                            alt="icon question"
                            style={{width: "100%", height: "100%"}}
                            resizeMode="contain"
                            source={assets.image.png.iconQuestion}
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </View>
            {isMenuVisible && (
              <View
                style={{
                  position: "absolute",
                  bottom: 80,
                  right: 10,
                  backgroundColor: "#fff",
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                {questions.map((question, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleQuestionSelect(question)}
                  >
                    <Text
                      style={{
                        padding: 14,
                        backgroundColor: Color.colorWhitesmoke_100,
                        marginBottom: 5,
                      }}
                    >
                      {question}
                    </Text>
                  </TouchableOpacity>
                ))}
                <View>
                  <TouchableOpacity>
                    <LinearGradient
                      style={styles.btnCreateService}
                      colors={["#CEDC39", "#7DA74D"]}
                    >
                      <Text style={styles.btnCreateService__text}>
                        {" "}
                        Create Service
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
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
