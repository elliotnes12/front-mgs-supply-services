import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../../utils";
import { ReportsScreen } from "../../screens/Reports/index";
import { styles } from "../Styles.style";

const Stack =  createNativeStackNavigator();

export function ReportsNavigation(){

    return(
        <Stack.Navigator screenOptions={
            {
              ...styles.stackNavigationStyles
            }
         }>
            <Stack.Screen component={ReportsScreen} 
            options={{headerShown:false}} name={screens.tab.reports.root} />
        </Stack.Navigator>
    )
}