

import React from 'react'
import { styles } from "./styles/HeaderChat.styles";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { assets } from '../../assets';
import { TextInput } from 'react-native';

export function Header({search}) {
    const navigation = useNavigation();

    return (
        <>
            <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.header}>
                <SafeAreaView style={styles.header__content}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 35, height: 35, marginRight: 10 }}>
                        <Image alt="icon goBack" style={{ width: "100%", height: "100%" }} source={assets.image.png.flechaizquierda} />
                    </TouchableOpacity>
                   
                    {search && 
                       <>
                         <Text>
                            buscador
                         </Text>
                         <TextInput  />
                       </>
                    }
                </SafeAreaView>
            </LinearGradient>
        </>
    )
}
