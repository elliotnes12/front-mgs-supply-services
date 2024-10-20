import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "./theme";
import { LinearGradient } from "expo-linear-gradient";
import { getIconById } from "./util";
import {View} from "react-native";

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
  regular: {
    fontFamily: theme.textStyles.regular,
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
    zIndex: 10,
  },
  gradientButtonSmall: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    marginEnd: 18,
    height: 43.5,
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
    color: theme.colors.graySilver,
  },
  orangeText: {
    color: "#FFBD12",
  },
  redText: {
    color: "#FF8585",
  },
  neutralGray: {
    color: theme.colors.neutralGray,
  },
  gray: {
    color: "#828282",
  },
  textGreen2: {
    color: "#7EA74C",
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
    fontSize: 15,
  },
  readOnly: {
    backgroundColor: "#F2F2F2",
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
  orangeText,
  redText,
  textGreen2,
  regular,
  font8pt,
  font10pt,
  font12pt,
  font14pt,
  font16pt,
  font17pt,
  font20pt,
  brightBlue,
  brightRed,
  neutralGray,
  gold,
  gray,
  titlleBig,
  line20,
  white,
  paraStyles,
  readOnly,
}) {
  const textStyles = [
    bold && styles.textBold,
    headerBig && styles.headerBig,
    regularWhite && styles.regularWhite,
    regularGray && styles.regularGray,
    boldGray && styles.boldGray,
    headerGray && styles.headerGray,
    regularGreen && styles.regularGreen,
    regular && styles.regular,
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
    orangeText && styles.orangeText,
    redText && styles.redText,
    textGreen2 && styles.textGreen2,
    line20 && styles.line20,
    white && styles.white,
    gray && styles.gray,
    lightGray && styles.lightGray,
    neutralGray && styles.neutralGray,
    readOnly && styles.readOnly,
  ];

  return <Text style={[textStyles, paraStyles]}>{children}</Text>;
}

export function StyledGradientButton({text, action, disabled = false}) {
  // Colores del gradiente: si está deshabilitado, aplica colores diferentes
  const gradientColors = disabled
    ? [theme.disabled.color1, theme.disabled.color2] // Colores para estado deshabilitado
    : [theme.gradient.color1, theme.gradient.color2]; // Colores normales

  return (
    <Pressable disabled={disabled} onPress={action}>
      <LinearGradient
        colors={gradientColors} // Aplica los colores condicionalmente
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
  icon,
}) {
  const gradientColors = focused
    ? [theme.gradientsmall.color1Focused, theme.gradientsmall.color2Focused]
    : [theme.colors.gray6, theme.colors.gray6];

  const textColor = focused ? "#fff" : theme.colors.darkGray;

  const whatIcon = focused ? icon + "Focus" : icon + "Blur";
  return (
    <Pressable onPress={action}>
      <LinearGradient
        colors={gradientColors}
        style={styles.gradientButtonSmall}
      >
        {icon && (
          <View style={{width: 22, height: 22, marginRight: 5}}>
            {getIconById(whatIcon)}
          </View>
        )}
        <Text style={[styles.gradientButtonTextsmall, {color: textColor}]}>
          {text}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}
