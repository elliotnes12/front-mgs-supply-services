import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../../utils";
import { styles } from "../Styles.style";
import { WorkFlowScreen } from "../../screens/Global/WorkFlowScreen";

const Stack = createNativeStackNavigator();

export function WorkFlowNavigation() {

    return (
        <Stack.Navigator screenOptions={
            {
                ...styles.stackNavigationStyles
            }
        }>
            <Stack.Screen
                name={screens.tab.workFlow.root}
                component={WorkFlowScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}