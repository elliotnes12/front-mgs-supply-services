import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Modal from 'react-native-modal';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { styles } from "./modal.styles";


export default function CustomModal({ isVisible, children, onClose }) {

  useEffect(() => {
    let timeoutId;

    if (isVisible) {
      // Establecer un temporizador para cerrar el modal después de 5 segundos (5000 milisegundos)
      timeoutId = setTimeout(() => {
        onClose();
      }, 5000); // Cambia 5000 por el tiempo en milisegundos que desees
    }

    // Limpiar el temporizador cuando el componente se desmonte o el modal se cierre manualmente
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible, onClose]);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 20, width: 290 }}>
          {children}
        </View>
      </View>
    </Modal>
  )
}