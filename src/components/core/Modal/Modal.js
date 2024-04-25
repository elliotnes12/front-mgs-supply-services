import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

export default function CustomModal({ isVisible, children, onClose }) {


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