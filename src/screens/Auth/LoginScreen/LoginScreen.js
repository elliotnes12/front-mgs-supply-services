import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";
import { styles } from "./LoginScreen.styles";
import { LoginForm } from "../../../components/Auth";

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screens.auth.registerScreen);
  };


  return (
    <View style={styles.content}>
      <LoginForm />

      
      <Text style={styles.register} onPress={goToRegister}>
        Registrarse
      </Text>
    </View>
  );
}