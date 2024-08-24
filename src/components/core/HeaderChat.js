

import React from 'react'
import { styles } from "./styles/HeaderChat.styles";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { assets } from '../../assets';
import { stylesGlobal } from '../../modules/styles/global.style';


export function HeaderChat({userName,fnMenu}) {
    const navigation = useNavigation();

    return (
        <>
            <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.header}>
                <SafeAreaView style={styles.header__content}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 35, height: 35, marginRight: 10 }}>
                        <Image alt="icon goBack" style={{ width: "100%", height: "100%" }} source={assets.image.png.iconLeftArrow} />
                    </TouchableOpacity>
                    <View style={[stylesGlobal.imageLg,styles.profile__image]}>
                        <Image alt='profile' style={{ height: "100%", width: "100%",borderRadius:30 }} resizeMode="contain" source={assets.image.png.profile} />
                    </View>
                    <View>
                        <Text style={styles.profile__name}>
                            {userName}
                        </Text>
                        <Text style={styles.profile__content}>
                            Send a message to this chat
                        </Text>
                    </View>
                    <TouchableOpacity onPress={fnMenu}  style={[stylesGlobal.imageMin,{position:"absolute",right:-50,}]}>
                            <Image style={stylesGlobal.imageMin__img} source={assets.image.png.iconoMenuVertical} />
                        </TouchableOpacity>
                </SafeAreaView>
            </LinearGradient>
        </>
    )
}
