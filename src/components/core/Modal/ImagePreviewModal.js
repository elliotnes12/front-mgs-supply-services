import React from "react";
import { Modal, ScrollView, View, Image, TouchableOpacity, Dimensions } from "react-native";
import { styles } from "./styles/ImagePreviewModal.styles";
import { getIconById } from "../../../utils/util";

const { width } = Dimensions.get("window");

export function ImagePreviewModal({ visible, photos, onClose }) {
    return (
        <Modal visible={visible} animationType="slide" onRequestClose={onClose} transparent={true}>
            <View style={styles.modalContainer}>
                <View style={{ flexDirection: "row-reverse", width: "100%", padding: 20 }}>
                    <TouchableOpacity onPress={onClose} style={styles.iconClose}>
                        {getIconById("iconClose")}
                    </TouchableOpacity>
                </View>
                <ScrollView
                    contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
                    horizontal
                    pagingEnabled
                >
                    {photos.map((photo, index) => (
                        <Image key={index} source={{ uri: photo }} style={[styles.modalImage, { width: width }]} resizeMode="contain" />
                    ))}
                </ScrollView>
            </View>
        </Modal>
    );
}
