import { TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { assets } from '../../assets';
import { Image } from 'react-native';
import { styles } from "./styles/ChatScreen.style";
import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderChat } from '../../components/core/HeaderChat';


export function ChatScreen() {

  const navigation = useNavigation();
  const route = useRoute();
  const { userId, userName } = route.params;
  const [text, setText] = useState('');


  return (
    <>
      <View style={{ display: "flex", flex: 1, backgroundColor: "red" }}>

        <HeaderChat userName={userName} />


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