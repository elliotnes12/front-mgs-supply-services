import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from "native-base";
import HandlerNavigation from './src/navigations/HandlerNavigation';
import { AuthProvider } from './src/contexts';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Rubik': require('./assets/fonts/rubik/Rubik-Regular.ttf'),
  });

 
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

