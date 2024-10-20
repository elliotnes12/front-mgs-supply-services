import { StyleSheet } from "react-native";
import { theme } from "../../../../utils/theme";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: "relative"
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        minHeight: 250,
        alignItems: 'center',
        flexDirection: "column"
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    starsContainer: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    textInput: {
        height: 80,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: theme.gradient.color2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    closeButton: {
        width: 20,
        height: 20,
        position: "absolute",
        right: 10
    },
    closeButtonText: {
        color: '#FF6347',
    },
});
