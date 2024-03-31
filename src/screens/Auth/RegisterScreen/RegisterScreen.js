import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "../../../components/Auth/RegisterForm";


export function RegisterScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      

       <RegisterForm />

      <Text style={styles.register} onPress={navigation.goBack}>
        Iniciar sesión
      </Text>
    </View>
  );
}