import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StyledText from '../../utils/globalstyle';
import { styles } from "./styles/HeaderChats.style";

export function HeaderChats({fnMenu}) {
    return (
        <>
            <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.chats_header}>
                <SafeAreaView style={styles.chats_header__content}>
                    <StyledText regularWhite>{"mgs supply & services".toUpperCase()}</StyledText>
                </SafeAreaView>
            </LinearGradient>
        </>
    )
}
