import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";
import { styles } from "./LoginScreen.styles";
import { LoginForm } from "../../../components/Auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { assets } from "../../../assets";

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screens.auth.registerScreen);
  };


  return (
     <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={assets.image.png.auth01} style={styles.img} />
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
        <Text style={styles.register} onPress={goToRegister}>
          Registrarse
        </Text>
      </View>
    </SafeAreaView>
  );
}