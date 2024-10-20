
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

export function CustomSwitch({ isOn, onToggle }) {
    const [switchOn, setSwitchOn] = useState(isOn);
    const [position] = useState(new Animated.Value(switchOn ? 1 : 0));

    const toggleSwitch = () => {
        setSwitchOn(!switchOn);
        onToggle(!switchOn);
        Animated.timing(position, {
            toValue: switchOn ? 0 : 1,
            duration: 300,
            useNativeDriver: false
        }).start();
    };

    const interpolateBackground = position.interpolate({
        inputRange: [0, 1],
        outputRange: ['#ddd', '#4cd137'], // Cambiar entre apagado y encendido
    });

    const interpolateSwitchPosition = position.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 28], // Posición de la bola
    });

    return (
        <TouchableOpacity onPress={toggleSwitch} style={styles.switchContainer}>
            <Animated.View
                style={[
                    styles.switchBackground,
                    { backgroundColor: interpolateBackground },
                ]}
            >
                <Animated.View
                    style={[
                        styles.switchKnob,
                        { left: interpolateSwitchPosition },
                    ]}
                />
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        justifyContent: 'center',
    },
    switchBackground: {
        width: 50,
        height: 30,
        borderRadius: 15,
        padding: 2,
        justifyContent: 'center',
    },
    switchKnob: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#fff',
        position: 'absolute',
    },
});
