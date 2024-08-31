import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "./theme";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  headerBig: {
    fontFamily: theme.textStyles.semiBold,
    fontSize: theme.fontSizes.big,
    color: "#fff",
  },
  titlleBig: {
    fontFamily: theme.textStyles.bold,
    fontSize: theme.fontSizes.big,
    color: "#000",
  },
  regularWhite: {
    fontFamily: theme.textStyles.regular,
    color: "#fff",
    fontSize: 15,
  },
  line20: {
    lineHeight: 20,
  },
  regularGray: {
    fontFamily: theme.textStyles.regular,
    color: "#333333",
    fontSize: 15,
  },
  regularGreen: {
    color: theme.colors.colorSecundario,
    fontFamily: theme.textStyles.regular,
    margin: 0,
    padding: 0,
  },
  boldGray: {
    fontFamily: theme.textStyles.bold,
    color: "#333",
    margin: 0,
    padding: 0,
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
    width: 120,
    marginEnd: 10,
    height: 35.5,
  },
  font8pt: {
    fontSize: 8,
  },
  font10pt: {
    fontSize: 10,
  },
  font12pt: {
    fontSize: 12,
  },
  font14pt: {
    fontSize: 14,
  },
  font16pt: {
    fontSize: 16,
  },
  font17pt: {
    fontSize: 17,
  },
  font20pt: {
    fontSize: 20,
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
  lightGray: {
    color: "#c3c3c3",
  },
  white: {
    color: "#fff",
  },
  asparagus: {
    color: "#7DA74D",
  },
  graySilver: {
    color: "#ABABAB",
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
  lightGray,
  asparagus,
  graySilver,
  font8pt,
  font10pt,
  font12pt,
  font14pt,
  font16pt,
  font17pt,
  font20pt,
  brightBlue,
  brightRed,
  gold,
  titlleBig,
  line20,
  white,
}) {
  const textStyles = [
    bold && styles.textBold,
    headerBig && styles.headerBig,
    regularWhite && styles.regularWhite,
    regularGray && styles.regularGray,
    boldGray && styles.boldGray,
    headerGray && styles.headerGray,
    regularGreen && styles.regularGreen,
    font8pt && styles.font8pt,
    font10pt && styles.font10pt,
    font12pt && styles.font12pt,
    font14pt && styles.font14pt,
    font16pt && styles.font16pt,
    font17pt && styles.font17pt,
    font20pt && styles.font20pt,
    brightBlue && styles.brightBlue,
    brightRed && styles.brightRed,
    gold && styles.gold,
    titlleBig && styles.titlleBig,
    asparagus && styles.asparagus,
    graySilver && styles.graySilver,
    line20 && styles.line20,
    white && styles.white,
    lightGray && styles.lightGray,
  ];
  return <Text style={textStyles}>{children}</Text>;
}

export function StyledGradientButton({ text, action }) {
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
export function StyledGradientButtonSmall({
  text,
  action = () => {},
  focused,
}) {
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
        <Text style={[styles.gradientButtonTextsmall, { color: textColor }]}>
          {text}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}
