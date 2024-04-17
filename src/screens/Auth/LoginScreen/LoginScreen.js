import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";
import { styles } from "./LoginScreen.styles";
import { LoginForm } from "../../../components/Auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { assets } from "../../../assets";
import { LinearGradient } from 'expo-linear-gradient';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screens.auth.registerScreen);
  };


  return (

    <LinearGradient
      colors={['rgba(125, 167, 77, 1)', 'rgba(125, 167, 77, 1)']}
      style={styles.gradient}
      start={[0, 0]}
      end={[1, 0]}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.imgContainer}>
          <Image source={assets.image.png.originLogo} style={styles.img} />
        </View>
        <SafeAreaView style={styles.content}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Enter and Keep your work day recorded.</Text>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
          <Pressable style={styles.signUp} onPress={goToRegister}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Pressable>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </LinearGradient>


  );
}
