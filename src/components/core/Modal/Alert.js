import React from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import { AlertDialog } from "native-base";
import { styled } from "../styles/Alert.styles";
import { View } from "react-native";

export function Alert(props) {
  const { show, type, title, message, setShowAlert } = props;
  const styles = styled(type);


  const handleOverlayClick = () => {
    setShowAlert(false)
  };

  return (
    <TouchableWithoutFeedback onPress={handleOverlayClick}>
  <AlertDialog isOpen={show}>
        <AlertDialog.Content>

          <View  style={styles.icon}>
             
          </View>
          <AlertDialog.Header style={styles.header}>
            <Text style={styles.titleText}>{title}</Text>
          </AlertDialog.Header>

          <AlertDialog.Body style={styles.body}>
            <Text style={styles.messageText}>{message}</Text>
          </AlertDialog.Body>
        </AlertDialog.Content>
    </AlertDialog>
    
    </TouchableWithoutFeedback>
  );
}
