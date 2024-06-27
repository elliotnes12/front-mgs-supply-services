import { TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { assets } from '../../assets';
import { Image } from 'react-native';
import { styles } from "./styles/ChatScreen.style";
import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';


export function ChatScreen() {

  const navigation = useNavigation();
  const [userChat, setUserChat] = useState('Elliot G')
  const [text, setText] = useState('');


  return (
    <>
      <View style={{ display: "flex", flex: 1, backgroundColor: "#f0f0f0" }}>

        <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.header}>
          <SafeAreaView style={styles.header__content}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 35, height: 35, marginRight: 10 }}>
              <Image alt="icon goBack" style={{ width: "100%", height: "100%" }} source={assets.image.png.flechaizquierda} />
            </TouchableOpacity>
            <View style={styles.profile__img}>
              <Image alt='profile' style={{ height: "100%", width: "100%" }} resizeMode="contain" source={assets.image.png.profile} />
            </View>
            <View>
              <Text style={styles.profile__name}>
                {userChat}
              </Text>
              <Text style={styles.profile__content}>
                Envia un mensaje a este chat
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>



        <View style={{ display: "flex", flexDirection: "row", flex: 1, backgroundColor: "transparent", position: "relative" }}>

          <View style={{ display: "flex", flexDirection: "row", height: 50, position: "absolute", bottom: 20, left: 10, width: "100%" }}>

            <View style={styles.mensaje}>
              <TouchableOpacity style={{ marginHorizontal: 15,width:25,height:25 }}>
                <Image alt="icon clip" style={{ width: "100%", height: "100%" }}  source={assets.image.png.iconguinos} />
              </TouchableOpacity>
              <TextInput style={styles.mensaje__input} />
              <View style={styles.contente__icons}>
                <TouchableOpacity style={{width:28,height:28,marginRight:15 }} >
                  <Image alt="icon clip" style={{ width: "100%", height: "100%"}} source={assets.image.png.clip} />
                </TouchableOpacity>
                <TouchableOpacity style={{width:25,height:25 }}>
                  <Image alt="icon camera" style={{ width: "100%", height: "100%" }} source={assets.image.png.camera} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", width: 80,marginTop:5 }}>
              <TouchableOpacity style={{ width: 45, height: 45, borderRadius: 22.5 }}>
                <Image alt="icon microfono" style={{ width: "100%", height: "100%" }} resizeMode='contain' source={assets.image.png.microfono} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    </>

    //  dUpQV7QMreiF4che
  )
}