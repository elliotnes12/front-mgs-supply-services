import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native'
import { stylesGlobal } from '../../modules/styles/global.style'
import {styles} from "./styles/HeaderChats.style";
import { assets } from '../../assets'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HeaderChats({fnMenu}) {
    return (
        <>
            <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.chats_header}>
                <SafeAreaView style={styles.chats_header__content}>
                    <Text style={{ color: "#fff", fontFamily: "Poppins_600SemiBold" }}>{"mgs supply & services".toUpperCase()}</Text>
                    <View style={[styles.chatsOptions, stylesGlobal.itemHorizontal]} >
                        <TouchableOpacity style={stylesGlobal.imageMin}>
                            <Image style={stylesGlobal.imageMin__img} source={assets.image.png.iconoLupaWhite} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={fnMenu} style={stylesGlobal.imageMin}>
                            <Image style={stylesGlobal.imageMin__img} source={assets.image.png.iconoMenuVertical} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </>
    )
}
