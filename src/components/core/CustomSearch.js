import React, { useEffect, useState, useRef } from "react";
import { Animated, TouchableOpacity, View, TextInput, Dimensions } from "react-native";
import { styles } from "./CustomSearch.styles";
import { getIconById } from "../../utils/util";

export function CustomSearch({ alignment = "left", placeholder = "Street" }) {
    const [toggle, setToggle] = useState(false);
    const [text, setText] = useState("");
    const refInput = useRef();
    const animation = useRef(new Animated.Value(0)).current;

    const screenWidth = Dimensions.get("window").width;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: toggle ? 1 : 0,
            duration: 240,
            useNativeDriver: false,
        }).start();
    }, [toggle]);

    const animatedStyles = {
        width: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"],
            extrapolate: "clamp",
        }),
        opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "clamp",
        }),
        marginLeft: alignment === "left" ? -50 : 0,
        marginRight: alignment === "right" ? 0 : -50,
        paddingLeft: alignment === "left" ? 60 : 10,
        paddingRight: alignment === "right" ? screenWidth * 0.58 : 10,
        alignSelf: alignment === "left" ? "flex-start" : "flex-end",
        transform: alignment === "right"
            ? [{
                translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [screenWidth * 0.8, 50],
                })
            }]
            : [{ translateX: 0 }],
    };

    const containerStyles = [
        styles.searchContainer,
        alignment === "left" ? { left: 10, right: "auto" } : { right: 10, left: "auto" },
    ];

    return (
        <View style={containerStyles}>
            <View style={[styles.searchBar, alignment === "right" && { flexDirection: "row-reverse" }]}>
                <TouchableOpacity
                    onPress={() => setToggle((prevState) => !prevState)}
                    style={styles.searchButton}
                >
                    <View style={styles.searchIcon}>
                        {getIconById("iconoLupaWhite")}
                    </View>
                </TouchableOpacity>

                <Animated.View
                    style={[styles.animatedSearch, animatedStyles]}
                >
                    <TextInput
                        ref={refInput}
                        value={text}
                        onChangeText={setText}
                        onSubmitEditing={() => console.log("busqueda")}
                        selectionColor={"#fff"}
                        placeholder={placeholder}
                        placeholderTextColor={"rgba(255,255,255)"}
                        style={styles.searchInput}
                    />
                </Animated.View>
            </View>
        </View>
    );
}
