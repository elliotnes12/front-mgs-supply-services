import { TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { assets } from '../../assets';
import { Image } from 'react-native';
import { styles } from "./styles/ChatScreen.style";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text } from 'native-base';
import { HeaderChat } from '../../components/core/HeaderChat';

export function ChatScreenSupervisor() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [chats,setChats] = useState([
     {
       userOne:'667d8c510e8ef1b712a87646',
       message: 'What service do you need?',
       style:'userOneMessage'
     },
     {
      userTwo:'667d8c510e8ef1b712a87645',
      message: 'I need to clean my office',
      style:'userTwoMessage'
    },
    {
      userTwo:'667d8c510e8ef1b712a87645',
      message: 'Can you help me?',
      style:'userTwoMessage'
    },
    {
      userOne:'667d8c510e8ef1b712a87646',
      message: 'Yes, we can help you',
      style:'userOneMessage'
    },
  ]);
  const route = useRoute();
  const { userId, userName } = route.params;

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [questions] = useState(['What service do you need?', 'How can we help you?', 'We have services available for you?']); 
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleQuestionSelect = (question) => {
    console.log(`Selected question: ${question}`);
    setIsMenuVisible(false);
  };

  return (
    <>
      <HeaderChat userName={userName} />
      <View style={{ display: "flex", flex: 1, backgroundColor: "#f0f0f0" }}>
       

        <View style={{ display: "flex", flexDirection: "row", flex: 1, backgroundColor: "transparent", position: "relative" }}>
          
          <View style={{display:"flex",flex:1,marginBottom:90,paddingTop:40,position:"relative"}}>
          
              {
                chats.map((element) =>{
                    return(
                       <>
                         <View style={element.style == 'userOneMessage'? styles.contentMessageOne : styles.contentMessageTwo }>
                         <Text style={element.style == 'userOneMessage'? styles.contentMessageOne__message : styles.contentMessageTwo__message } >{element.message}</Text>
                         </View>
                        
                       </>
                    )
                })
              }

          </View>
          
          <View style={{ display: "flex", flexDirection: "row", height: 50, position: "absolute", bottom: 20, left: 10, width: "100%" }}>
            <View style={styles.mensaje}>
              <TouchableOpacity style={{ marginHorizontal: 15, width: 25, height: 25 }}>
                <Image alt="icon clip" style={{ width: "100%", height: "100%" }} source={assets.image.png.iconguinos} />
              </TouchableOpacity>
              <TextInput style={styles.mensaje__input} />
              <View style={styles.contente__icons}>
                <TouchableOpacity style={{ width: 28, height: 28, marginRight: 15 }} >
                  <Image alt="icon clip" style={{ width: "100%", height: "100%" }} source={assets.image.png.clip} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 25, height: 25 }}>
                  <Image alt="icon camera" style={{ width: "100%", height: "100%" }} source={assets.image.png.camera} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", width: 40, marginTop: 5, marginLeft: 5 }}>
              <TouchableOpacity style={{ width: 45, height: 45, borderRadius: 22.5 }}>
                <Image alt="icon microfono" style={{ width: "100%", height: "100%" }} resizeMode='contain' source={assets.image.png.microfono} />
              </TouchableOpacity>
            </View>
            <View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", width: 65, marginTop: 5 }}>
              <TouchableOpacity onPress={toggleMenu} style={{ width: 45, height: 45, borderRadius: 22.5 }}>
                <LinearGradient style={{ width: "100%", height: "100%", borderRadius: 22.5, display: "flex", justifyContent: "center", alignItems: "center" }} colors={['#CEDC39', '#7DA74D']}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>?</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {isMenuVisible && (
          <View style={{ position: 'absolute', bottom: 80, right: 10, backgroundColor: '#fff', padding: 10, borderRadius: 5 }}>
            {questions.map((question, index) => (
              <TouchableOpacity key={index} onPress={() => handleQuestionSelect(question)}>
                <Text style={{ padding: 14,backgroundColor:"#F5F5F5",marginBottom:5 }}>{question}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </>
  );
}
