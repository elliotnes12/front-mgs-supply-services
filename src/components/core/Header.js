import React, { useState, useRef } from 'react';
import { Animated, Image, SafeAreaView, TouchableOpacity, TextInput, View, Easing, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { assets } from '../../assets';
import { styles } from "./styles/HeaderChat.styles";
import { stylesGlobal } from '../../modules/styles/global.style';
import { getIconById } from '../../utils/util';
import { headers } from '../../utils';
import StyledText from '../../utils/globalstyle';

export function Header({ search, title, subtitle, goBack, headerType, totalContacts, support, placeholder = "Search by Ticket", refresh, total }) {
    const navigation = useNavigation();
    const [isSearchVisible, setSearchVisible] = useState(false);
    const searchAnim = useRef(new Animated.Value(-300)).current; // Comienza fuera de la pantalla (a la izquierda)
    const [textSearch, setTextSearch] = useState("")
    const toggleSearch = () => {
        if (isSearchVisible) {
            // Ocultar el buscador deslizándose de vuelta a la izquierda
            Animated.timing(searchAnim, {
                toValue: -300, // Fuera de la pantalla a la izquierda
                duration: 200, // Más rápido
                easing: Easing.ease,
                useNativeDriver: true,
            }).start(() => setSearchVisible(false));

            setTextSearch("")
            if (total == 0) {
                refresh();
            }

        } else {
            // Mostrar el buscador deslizándose de izquierda a derecha
            setSearchVisible(true);
            Animated.timing(searchAnim, {
                toValue: 0, // Posición inicial (visible)
                duration: 200, // Más rápido
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <View style={{ position: "relative" }}>
            {!headerType && (
                <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.header}>
                    <SafeAreaView style={styles.header__content}>
                        {goBack && (
                            <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ width: 35, height: 35, marginRight: 10 }}>
                                <Image alt="icon goBack" style={{ width: "100%", height: "100%" }} source={assets.image.png.iconLeftArrow} />
                            </TouchableOpacity>
                        )}

                        <View style={stylesGlobal.itemVertical}>
                            <Text style={styles.title}>{title}</Text>
                            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                        </View>

                        {search && (
                            <View style={{ flex: 1, position: "absolute", right: 10 }}>
                                <TouchableOpacity onPress={toggleSearch} style={{ width: 30, height: 30 }}>
                                    {getIconById("iconoLupaWhite")}
                                </TouchableOpacity>
                            </View>
                        )}
                    </SafeAreaView>
                </LinearGradient>
            )}

            {/* Buscador animado */}
            {isSearchVisible && (
                <Animated.View
                    style={{
                        position: 'absolute',
                        justifyContent: "center",
                        top: 0,
                        left: 0,
                        right: 0,
                        transform: [{ translateX: searchAnim }],
                    }}
                >
                    <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.boxSearch}>
                        <SafeAreaView style={{ flexDirection: "row", alignItems: "center", flex: 1, paddingTop: 30 }}>
                            <TouchableOpacity onPress={toggleSearch} style={{ width: 35, height: 35, marginRight: 10 }}>
                                {getIconById("iconLeftArrow")}
                            </TouchableOpacity>

                            <View style={styles.boxInputSearch}>
                                <TextInput
                                    onChangeText={(text) => setTextSearch(text.toUpperCase())}
                                    style={{ flex: 2 }}
                                    placeholder={placeholder}
                                    value={textSearch}
                                    autoFocus={true}
                                    onEndEditing={() => search(textSearch)}
                                />
                                {textSearch.length > 0 &&
                                    <TouchableOpacity onPress={() => {
                                        setTextSearch("")
                                        if (typeof refresh === 'function') {
                                            refresh();
                                        }

                                    }} style={{ width: 30, height: 30 }}>
                                        {getIconById("iconClear")}
                                    </TouchableOpacity>

                                }
                            </View>
                        </SafeAreaView>
                    </LinearGradient>
                </Animated.View>
            )}

            {headerType === headers.HEADER_CONTACT && (
                <View style={[styles.header, { backgroundColor: "#fff", borderBottomWidth: 0.4, borderBottomColor: "#ccc" }]}>
                    <SafeAreaView style={styles.headerContacts__content}>
                        {goBack && (
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 30, height: 30, marginRight: 10, justifyContent: "center" }}>
                                <Image alt="icon goBack" style={{ width: "100%", height: "100%" }} source={assets.image.png.iconGoBack} />
                            </TouchableOpacity>
                        )}
                        <View style={{ justifyContent: "center", marginRight: 10 }}>
                            <StyledText font17pt boldGray>{title}</StyledText>
                        </View>
                        {totalContacts && <Text style={styles.totalContacts}>{totalContacts} contacts</Text>}
                    </SafeAreaView>
                </View>
            )}
        </View>
    );
}
