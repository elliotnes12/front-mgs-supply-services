import { View, Text } from 'react-native'
import React from 'react'
import { styles } from "../../modules/chat/styles/chatScreen.styles";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { assets } from '../../assets';
import { Image } from 'react-native';

export function ChatScreen() {
  return (
    <View>
      <View style={styles.header}>
        <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.gradient}>
          <SafeAreaView>
            <View>
              <View style={styles.profile__img}>
                <Image alt='profile' style={{height:"100%",width:"100%"}} resizeMode="contain" source={assets.image.png.profile} />
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </View>
  )
}