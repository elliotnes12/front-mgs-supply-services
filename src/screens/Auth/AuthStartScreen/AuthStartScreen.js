import { SafeAreaView, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";
import { assets } from "../../../assets";
import { styles } from "./AuthStartScreen.styles";

export  function AuthStartScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screens.auth.loginScreen);
  };


  return (
    <SafeAreaView style={styles.content}>
         <Image source={assets.image.png.auth01} style={styles.img} />
         <View>
        <Text style={styles.title}>Te damos la bienvenida</Text>

        <Text style={styles.description}>
          Consulta nuestras Política de privacidad. Pulsa "Aceptar y continuar"
          para aceptar las Condiciones del servicio
        </Text>
        <Text style={styles.btn} onPress={goToLogin}>
          Aceptar y continuar
        </Text>
        
      </View>
    </SafeAreaView>
  )
}