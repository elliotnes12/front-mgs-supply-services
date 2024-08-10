import {Pressable, StyleSheet, Text} from "react-native";
import {theme} from "./theme";
import {LinearGradient} from "expo-linear-gradient";

const styles = StyleSheet.create({
  headerBig: {
    fontFamily: theme.textStyles.semiBold,
    fontSize: theme.fontSizes.big,
    color: "#fff",
  },
  regularWhite: {
    fontFamily: theme.textStyles.regular,
    color: "#fff",
    fontSize: 15,
  },
  regularGray: {
    fontFamily: theme.textStyles.regular,
    color: "#333333",
    fontSize: 15,
  },
  boldGray: {
    fontFamily: theme.textStyles.bold,
    color: "#333",
  },
  medium: {
    fontFamily: theme.textStyles.bold,
    fontSize: theme.fontSizes.medium_size,
    color: "#333",
  },
  gradientButton: {
    padding: 15,
    borderRadius: 35,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 220,
  },
  gradientButtonSmall: {
    padding: 5,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 125,
    marginEnd: 10,
    height: 35,
  },
  gradientButtonText: {
    fontFamily: theme.textStyles.regular,
    color: "#fff",
    alignSelf: "center",
  },
  gradientButtonTextsmall: {
    fontFamily: theme.textStyles.regular,
  },
});

export default function StyledText({
  children,
  bold,
  headerBig,
  regularWhite,
  regularGray,
  boldGray,
  medium,
}) {
  const textStyles = [
    bold && styles.textBold,
    headerBig && styles.headerBig,
    regularWhite && styles.regularWhite,
    regularGray && styles.regularGray,
    boldGray && styles.boldGray,
    medium && styles.medium,
  ];
  return <Text style={textStyles}>{children}</Text>;
}

export function StyledGradientButton({text, action}) {
  const buttonStyles = [];
  return (
    <Pressable onPress={action}>
      <LinearGradient
        colors={[theme.gradient.color1, theme.gradient.color2]}
        style={styles.gradientButton}
      >
        <Text style={styles.gradientButtonText}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
}
export function StyledGradientButtonSmall({text, action, focused}) {
  const buttonStyles = [];
  const gradientColors = focused
    ? [theme.gradientsmall.color1Focused, theme.gradientsmall.color2Focused]
    : [theme.gradientsmall.color1, theme.gradientsmall.color2];

  const textColor = focused ? "#fff" : "#ABABAB";

  return (
    <Pressable onPress={action}>
      <LinearGradient
        colors={gradientColors}
        style={styles.gradientButtonSmall}
      >
        <Text style={[styles.gradientButtonTextsmall, {color: textColor}]}>
          {text}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}
