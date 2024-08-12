import { StyleSheet } from "react-native";
import { theme } from "../../../utils/theme";


export const styled = (type) => {

    return new StyleSheet.create({
        icon: {
            width: 35,
            height: 35,
            borderRadius: 21,
            padding: 5,
            backgroundColor: type == 'info' ? theme.colors.info : 'blue'
        },
        messageText: {
            color: theme.colors.primary,
            fontFamily: theme.textStyles.semiBold
        }
    });
}