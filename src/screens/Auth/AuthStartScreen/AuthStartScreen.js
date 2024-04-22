import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";
import { assets } from "../../../assets";
import { styles } from "./AuthStartScreen.styles";
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export  function AuthStartScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screens.auth.profileScreen);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
     
        <Image source={assets.image.png.originLogo} style={styles.img} />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.description}>
          Check out our Privacy Policy. Tap 'Accept and continue' to agree to the Terms of Service.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={goToLogin}>
          <Text style={styles.btnText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}