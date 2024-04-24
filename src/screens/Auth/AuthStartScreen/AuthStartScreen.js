import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { assets } from "../../../assets";
import { screens } from "../../../utils";
import { styles } from "./AuthStartScreen.styles";

export  function AuthStartScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screens.auth.jobHistoryScreen);
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