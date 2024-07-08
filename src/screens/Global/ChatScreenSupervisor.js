import { TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { assets } from '../../assets';
import { Image } from 'react-native';
import { styles } from "./styles/ChatScreen.style";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text } from 'native-base';
import { HeaderChat } from '../../components/core/HeaderChat';
import { Color } from '../../utils/constantsStyle';
import { TouchableWithoutFeedback } from 'react-native';
import { Chat } from '../../modules/chat/api/Chat';
import { useAuth } from '../../modules/Auth/hooks';
import{ AlertConfirm } from '../../components/core/Modal/AlertConfirm';
import { ChatMessage } from '../../modules/chat/api/chatMessage';


export function ChatScreenSupervisor() {

  const { accessToken } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuSettings, setIsMenuSettings] = useState(false);
  const [showDelete, setShowDelete] = useState(false)
  const [questions] = useState(['What service do you need?', 'How can we help you?', 'We have services available for you?']);
  const [optionsSettings] = useState(['Delete Chat', 'Settings']);
  const { chatId, userName } = route.params;

  

  const chatController = new Chat();  
  const chatMessageController = new ChatMessage();



  useEffect(() =>{

    (async() =>{

        try{

           const response = await chatMessageController.getAll(accessToken,chatId);
           

        }catch(error){
          console.log(error);
        }


    })();


  },[])


  const openCloseDelete = () => setShowDelete((prevState) => !prevState)

  const [chats, setChats] = useState([
    {
      userOne: '667d8c510e8ef1b712a87646',
      message: 'What service do you need?',
      style: 'userOneMessage'
    },
    {
      userTwo: '667d8c510e8ef1b712a87645',
      message: 'I need to clean my office',
      style: 'userTwoMessage'
    },
    {
      userTwo: '667d8c510e8ef1b712a87645',
      message: 'Can you help me?',
      style: 'userTwoMessage'
    },
    {
      userOne: '667d8c510e8ef1b712a87646',
      message: 'Yes, we can help you',
      style: 'userOneMessage'
    },
  ]);
 
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleMenuSettings = (option) => {
    if (option === 'Delete Chat') {
      setShowDelete(true);
    }
    setIsMenuSettings(!isMenuSettings);
  };

  const handleQuestionSelect = (question) => {
    setIsMenuVisible(false);
  };

  const onRequestCloseModal = () => {
    setIsModalVisible(false)
  }
  const handleClickOutside = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }

    if (isMenuSettings) {
      setIsMenuSettings(false);
    }
  };

  const handleDeleteChat = () => {
    setIsModalVisible(false);
  };


  const deleteChat = async () => {
    try {
      await chatController.deleteChat(accessToken, chatId);
      openCloseDelete();
      navigation.goBack();
    } catch (e) {
    }
  }

  return (
    <>

      <TouchableWithoutFeedback onPress={handleClickOutside}>
        <View style={{ position: "relative", flexGrow: 1 }}>
          <HeaderChat fnMenu={toggleMenuSettings} userName={userName} />
          {isMenuSettings && (
            <View style={styles.menuChat}>
              {optionsSettings.map((option, index) => (
                <TouchableOpacity style={index != optionsSettings.length - 1 ? styles.menuChat__item : ''} key={index} onPress={() => toggleMenuSettings(option)}>
                  <Text style={styles.menuChat__option}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View style={{ display: "flex", flex: 1, backgroundColor: "#f1eee9" }}>
            <View style={{ display: "flex", flexDirection: "row", flex: 1, backgroundColor: "transparent", position: "relative" }}>
              <View style={{ display: "flex", flex: 1, marginBottom: 90, paddingTop: 40, position: "relative" }}>
                {chats.map((element, index) => (
                  <View key={index} style={element.style == 'userOneMessage' ? styles.contentMessageOne : styles.contentMessageTwo}>
                    <Text style={element.style == 'userOneMessage' ? styles.contentMessageOne__message : styles.contentMessageTwo__message}>{element.message}</Text>
                  </View>
                ))}
              </View>
              <View style={{ display: "flex", flexDirection: "row", height: 50, position: "absolute", bottom: 20, left: 10, width: "100%" }}>
                <View style={styles.mensaje}>
                  <TouchableOpacity style={{ marginHorizontal: 15, width: 25, height: 25 }}>
                    <Image alt="icon clip" style={{ width: "100%", height: "100%" }} source={assets.image.png.iconguinos} />
                  </TouchableOpacity>
                  <TextInput placeholder='Message' style={styles.mensaje__input} />
                  <View style={styles.contente__icons}>
                    <TouchableOpacity style={{ width: 28, height: 28, marginRight: 15 }} >
                      <Image alt="icon clip" style={{ width: "100%", height: "100%" }} source={assets.image.png.clip} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 25, height: 25 }}>
                      <Image alt="icon camera" style={{ width: "100%", height: "100%" }} source={assets.image.png.camera} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", width: 65, marginTop: 5 }}>
                  <TouchableOpacity onPress={toggleMenu} style={{ width: 45, height: 45, borderRadius: 22.5, marginRight: 10 }}>
                    <LinearGradient style={{ width: "100%", height: "100%", padding: 8, borderRadius: 22.5, display: "flex", justifyContent: "center", alignItems: "center" }} colors={['#CEDC39', '#7DA74D']}>
                      <Image alt="icon question" style={{ width: "100%", height: "100%" }} resizeMode='contain' source={assets.image.png.iconQuestion} />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {isMenuVisible && (
              <View style={{ position: 'absolute', bottom: 80, right: 10, backgroundColor: '#fff', padding: 10, borderRadius: 5 }}>
                {questions.map((question, index) => (
                  <TouchableOpacity key={index} onPress={() => handleQuestionSelect(question)}>
                    <Text style={{ padding: 14, backgroundColor: Color.colorWhitesmoke_100, marginBottom: 5 }}>{question}</Text>
                  </TouchableOpacity>
                ))}
                <View>
                  <TouchableOpacity>
                    <LinearGradient style={styles.btnCreateService} colors={['#CEDC39', '#7DA74D']}>
                      <Text style={styles.btnCreateService__text}> Create Service</Text>
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
        onClose={openCloseDelete}
        textConfirm="Eliminar"
        onConfirm={() => deleteChat()}
        title="¿Estas seguro de que quieres eliminar el chat?"
        isDanger
      />
    </>


  );
}
