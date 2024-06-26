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
      <View>
        <Image alt="icon fondo" style={{ width: "100%", height: "100%", }} source={assets.image.png.fondo} />
      </View>

      
        <View style={styles.contente__inbox}>
          <TouchableOpacity style={{ width: 45, height: 45, marginRight: 10 }}>
            <Image alt="icon microfono" style={styles.inbox} source={assets.image.png.inbox} />
          </TouchableOpacity>
        </View>
        <View style={styles.contente__item}>
          <View>
            <TouchableOpacity style={{ width: 45, height: 45, marginRight: 10 }}>
              <Image alt="icon microfono" style={{ width: "100%", height: "100%", }} source={assets.image.png.microfono} />
            </TouchableOpacity>
          </View>
        </View>

      
    </>


  )
}