import { TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { assets } from '../../assets';
import { Image } from 'react-native';
import { styles } from "./styles/ChatScreenSupervisor.style";
import { useNavigation } from '@react-navigation/native';
import { Text } from 'native-base';
import { useRoute } from '@react-navigation/native';


export function ChatScreenSupervisor() {

  const navigation = useNavigation();
  const [text, setText] = useState('');
  const route = useRoute();
  const { userId, userName } = route.params;



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
              {userName}
            </Text>
            <Text style={styles.profile__content}>
              Envia un mensaje a este chat
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      

      <View style={styles.contente__inbox}>
        
        
        <Image alt="icon inbox" style={styles.inbox} source={assets.image.png.inbox} />
        
        <View style={styles.contente__item}>
       
          <View>
            <TouchableOpacity>
              <Image alt="icon microfono" style={styles.microfono} source={assets.image.png.microfono} />
            </TouchableOpacity>
          </View>
        </View>
        
      </View>


    </>


  )
}