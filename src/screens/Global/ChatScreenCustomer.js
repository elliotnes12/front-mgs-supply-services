import { TextInput, TouchableOpacity, View, Platform, Keyboard, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { assets } from '../../assets';
import { Image } from 'react-native';
import { styles } from "./styles/ChatScreen.style";
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, Text } from 'native-base';
import { HeaderChat } from '../../components/core/HeaderChat';
import { TouchableWithoutFeedback } from 'react-native';
import { Chat } from '../../modules/chat/api/Chat';
import { useAuth } from '../../modules/Auth/hooks';
import { ChatMessage } from '../../modules/chat/api/chatMessage';
import { LoadingScreen } from '../../components/core/LoadingScreen';
import { ListMessages } from '../../components/core/chat/ListMessages';
import { socket } from '../../utils';
import { initialValues, validationSchema } from "../../components/core/chat/ChatForm.form";
import { useFormik } from 'formik';
import { getIconById } from '../../utils/util';
import { AlertConfirm } from "../../components/core/Modal/AlertConfirm";
import StyledText from '../../utils/globalstyle';
import { LABEL } from '../../utils/labels';
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '../../utils/constantsStyle';

export function ChatScreenCustomer({ chat }) {
  const { accessToken } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuSettings, setIsMenuSettings] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [optionsSettings] = useState(['Delete Chat', 'Settings']);
  const { chatId, userName } = route.params;
  const [messages, setMessages] = useState(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const chatController = new Chat();
  const chatMessageController = new ChatMessage();
  const [questions] = useState([
    "What service do I need to book?",
    "How can you help me?",
    "Can I schedule a cleaning service online?",
    "How long will the service take?",
    "What is included in the cleaning services?",
    "Can you offer me a customized service?",
    "What is the cost of the service?",
  ]);


  const openCloseDelete = () => setShowDelete((prevState) => !prevState);

  useEffect(() => {
    const showKeyboardSub = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardHeight(e.endCoordinates.height);
    });

    const hideKeyboardSub = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      showKeyboardSub.remove();
      hideKeyboardSub.remove();
    };
  }, []);

  const toggleMenuSettings = (option) => {
    if (option === 'Delete Chat') {
      setShowDelete(true);
    }
    setIsMenuSettings(!isMenuSettings);
  };
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleClickOutside = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }

    if (isMenuSettings) {
      setIsMenuSettings(false);
    }
  };


  const newMessage = (msg) => {
    setMessages((prevMessages) => [...prevMessages, msg]);
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
    const showKeyboardSub = Keyboard.addListener("keyboardDidShow", (e) => {
      const { startCoordinates } = e;

      if (Platform.OS === "ios") {
        setKeyboardHeight(startCoordinates?.height + 65);
      }
    });

    return () => showKeyboardSub.remove();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await chatMessageController.getAll(accessToken, chatId);
        setMessages(data.messages);

      } catch (error) {
        setMessages([]);
      }
    })();
  }, []);


  const handleQuestionSelect = question => {
    setIsMenuVisible(false);
    (async () => {
      try {
        await chatMessageController.sendText(accessToken, chatId, question);
      } catch (error) { }

    })();
  };

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
    onSubmit: async (formValue) => {
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

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} 
      style={{ flex: 1 }}
    >

      <TouchableWithoutFeedback onPress={handleClickOutside}>
        <View style={{ position: "relative", flexGrow: 1 }}>
          <HeaderChat fnMenu={toggleMenuSettings} userName={userName} />
          {isMenuSettings && (
            <View style={styles.menuChat}>
              {optionsSettings.map((option, index) => (
                <TouchableOpacity style={index !== optionsSettings.length - 1 ? styles.menuChat__item : ''} key={index} onPress={() => toggleMenuSettings(option)}>
                  <View style={styles.menuChat__option}>
                    <StyledText regularGray font14pt  >{option}</StyledText>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View style={{ display: "flex", flex: 1, backgroundColor: "#f1eee9" }}>
            <View style={{ display: "flex", flexDirection: "row", flex: 1, backgroundColor: "transparent", position: "relative" }}>
              <ListMessages messages={messages} keyboardHeight={keyboardHeight} />

              <View style={styles.containerMessages}>
                <View style={styles.mensaje}>
                  <TouchableOpacity style={{ marginHorizontal: 15, width: 25, height: 25 }}>
                    {getIconById("iconSuitCaseEmoji")}
                  </TouchableOpacity>
                  <TextInput
                    placeholder='Message'
                    style={styles.mensaje__input}
                    value={formik.values.message}
                    onChangeText={(text) => formik.setFieldValue("message", text)}
                    onEndEditing={!formik.isSubmitting && formik.handleSubmit}
                    returnKeyType="send"
                  />
                  <View style={styles.contente__icons}>
                    <TouchableOpacity style={{ width: 28, height: 28, marginRight: 15 }}>
                      <Image alt="icon clip" style={{ width: "100%", height: "100%" }} source={assets.image.png.iconClip} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 25, height: 25, marginRight: 15 }}>
                      <Image alt="icon camera" style={{ width: "100%", height: "100%" }} source={assets.image.png.iconCamera} />
                    </TouchableOpacity>
                  </View>
                </View>
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

                {isMenuVisible && (
                  <ScrollView
                    style={styles.menu__questions}
                  >
                    <View style={{ paddingBottom: 40 }}>
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
          </View>
        </View>
      </TouchableWithoutFeedback>

      <AlertConfirm
        show={showDelete}
        type={'info'}
        onClose={openCloseDelete}
        textConfirm="Delete"
        onConfirm={() => deleteChat()}
        message={"Are you sure you want to delete the chat?"}
        isDanger
      />

    </KeyboardAvoidingView>

  );
}


