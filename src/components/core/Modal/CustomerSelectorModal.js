import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { getIconById } from "../../../utils/util";
import { theme } from "../../../utils/theme";
import { styles } from "./styles/CustomerSelectorModal.styles";
import Modal from "react-native-modal";

export function CustomerSelectorModal({ isVisible, onClose }) {

    const [isLoading, setIsLoading] = useState(false)



    return (
        <Modal visible={isVisible} style={styles.container} animationType="slide">
            {!isLoading ? (
                <View style={{ flex: 1, padding: 10, backgroundColor: "" }}>
                    <View style={styles.headerModal}>
                        <TouchableOpacity onPress={onClose} style={styles.iconClose}>
                            {getIconById("iconClose")}
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={theme.gradient.color1} />
                </View>
            )}
        </Modal>
    );
}
