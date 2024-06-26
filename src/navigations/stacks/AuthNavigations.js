import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../../utils/index";
import { AuthStartScreen, LoginScreen, RegisterScreen } from "../../screens/Auth";
import {styles } from "../Styles.style";


const Stack = createNativeStackNavigator();


export function AuthNavigation(){
    return(
       <Stack.Navigator screenOptions={
          {
            ...styles.stackNavigationStyles
          }
       }>

            <Stack.Screen 
               name={screens.auth.authStartScreen}
               component={AuthStartScreen}
               options={{headerShown:false}}
            />

            <Stack.Screen
               name={screens.auth.loginScreen}
               component={LoginScreen}
               options={{headerShown:false}}
            />

            <Stack.Screen
               name={screens.auth.registerScreen}
               component={RegisterScreen}
               options={{title:"Registro"}}
            /> 
                
       </Stack.Navigator>
    )
}
