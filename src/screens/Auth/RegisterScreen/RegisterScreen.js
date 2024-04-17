import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "../../../components/Auth/RegisterForm";
import { assets } from "../../../assets";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export function RegisterScreen() {

  const navigation = useNavigation();

  return (

    <LinearGradient
      colors={['rgba(125, 167, 77, 1)', 'rgba(125, 167, 77, 1)']}
      style={styles.gradient}
      start={[0, 0]}
      end={[1, 0]}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardShouldPersistTaps="handled">

        <View style={styles.imgContainer}>
          <Image source={assets.image.png.originLogo} style={styles.img} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Registration</Text>
          <RegisterForm />
          <Pressable style={styles.btnLogin} onPress={() => {
            navigation.goBack();
          }}>
            <Text style={styles.btnLoginText}>Login</Text>
          </Pressable>
        </View>

      </KeyboardAwareScrollView>
    </LinearGradient>

  );
}