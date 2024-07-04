import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, SafeAreaView, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { assets } from '../../assets';
import { styles } from "./styles/HeaderChat.styles";
import { stylesGlobal } from '../../modules/styles/global.style';

export function Header({ search, title, subtitle, goBack }) {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.header}>
            <SafeAreaView style={styles.header__content}>
                {goBack &&
                    <>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 35, height: 35, marginRight: 10 }}>
                            <Image alt="icon goBack" style={{ width: "100%", height: "100%" }} source={assets.image.png.flechaizquierda} />
                        </TouchableOpacity>

                    </>
                }

                <View style={stylesGlobal.itemVertical}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>

                {search &&
                    <>
                        <TouchableOpacity style={[stylesGlobal.imageMin, { right: 20 }]}>
                            <Image style={stylesGlobal.imageMin__img} source={assets.image.png.iconoLupaWhite} />
                        </TouchableOpacity>

                    </>
                }


                <View style={[stylesGlobal.itemHorizontal, styles.globalSearch]}>
                    <View style={[stylesGlobal.itemHorizontal, styles.containerSearch]}>
                        <View style={stylesGlobal.imageMin}>
                            <Image style={stylesGlobal.imageMin__img} source={assets.image.png.iconLupa} />
                        </View>
                        <TextInput style={{ flex: 1 }} />
                    </View>
                    <TouchableOpacity style={styles.btnSearch}>
                        <View style={[stylesGlobal.imageMin]}>
                            <Image style={stylesGlobal.imageMin__img} source={assets.image.png.iconCalendarSearch} />
                        </View>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </LinearGradient>
    );
}
