

import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './layout.styles';
import { View, Image } from 'native-base';
import { assets } from "../../../assets";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LayoutAuth({ children }) {
    return (
        <>
            <LinearGradient
                colors={['rgba(125, 167, 77, 1)', 'rgba(125, 167, 77, 1)']}
                style={styles.gradient}
                start={[0, 0]}
                end={[1, 0]}>
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardShouldPersistTaps="handled">

                    <View style={styles.imgContainer}>
                        <Image source={assets.image.png.whiteLogo} alt="Logo" style={styles.img} />
                    </View>

                    <SafeAreaView style={styles.content}>
                        {children}
                    </SafeAreaView>

                </KeyboardAwareScrollView>

            </LinearGradient>
        </>
    )
}
