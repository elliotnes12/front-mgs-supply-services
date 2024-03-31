import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import HandlerNavigation from './src/navigations/HandlerNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts';

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
