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
  regularGreen: {
    color: theme.colors.colorSecundario,
    fontFamily: theme.textStyles.regular,
  },
  boldGray: {
    fontFamily: theme.textStyles.bold,
    color: "#333",
  },
  headerGray: {
    fontFamily: theme.textStyles.bold,
    color: "#333",
    fontSize: theme.fontSizes.header,
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
  font14pt: {
    fontSize: 14,
  },
  brightRed: {
    color: theme.colors.brightRed,
  },
  brightBlue: {
    color: theme.colors.brightBlue,
  },
  gold: {
    color: theme.colors.goldenYellow,
  },
  textBold: {
    fontFamily: theme.textStyles.bold,
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
  headerGray,
  regularGreen,
  font14pt,
  brightBlue,
  brightRed,
  gold,
}) {
  const textStyles = [
    bold && styles.textBold,
    headerBig && styles.headerBig,
    regularWhite && styles.regularWhite,
    regularGray && styles.regularGray,
    boldGray && styles.boldGray,
    headerGray && styles.headerGray,
    regularGreen && styles.regularGreen,
    font14pt && styles.font14pt,
    brightBlue && styles.brightBlue,
    brightRed && styles.brightRed,
    gold && styles.gold,
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
