import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import HandlerNavigation from './src/navigations/HandlerNavigation';
import { AuthProvider, LocationProvider } from './src/contexts';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold,Poppins_500Medium,Poppins_300Light } from '@expo-google-fonts/poppins';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_300Light
    
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }else{

    return (
      <NavigationContainer>
        <NativeBaseProvider>
           <AuthProvider>
            <HandlerNavigation />
           </AuthProvider> 
        </NativeBaseProvider>
      </NavigationContainer>
    );
  }

}

