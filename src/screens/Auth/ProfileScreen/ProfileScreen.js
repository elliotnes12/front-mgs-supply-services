import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ProfileScreen.styles";
import { RegisterForm } from "../../../components/Auth/RegisterForm";
import { assets } from "../../../assets";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ProfileForm } from "../../../components/Auth";

export function ProfileScreen() {

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

        {/* Circulo con la imagen */}
        <View style={styles.imgContainerPerfil}>
          <Image source={assets.image.png.profile} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>User Profile</Text>
          <ProfileForm/>
          <Pressable style={styles.btnLogin} onPress={() => {
            navigation.goBack();
          }}>
            <Text style={styles.btnLoginText}>Sign off</Text>
          </Pressable>
        </View>

      </KeyboardAwareScrollView>
    </LinearGradient>

  );
}