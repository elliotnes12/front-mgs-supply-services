import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Modal from 'react-native-modal';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { styles } from "./modal.styles";
import { LinearGradient } from 'expo-linear-gradient';

export default function CustomModal({ isVisible, children, onClose }) {

  useEffect(() => {
    let timeoutId;

    if (isVisible) {
      timeoutId = setTimeout(() => {
        onClose();
      }, 2000);
    }
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
      
         <View style={{backgroundColor:"#fff",height:150,padding:20,justifyContent:"center"}}>
         {children}
         </View>

      </View>
    </Modal>
  )
}