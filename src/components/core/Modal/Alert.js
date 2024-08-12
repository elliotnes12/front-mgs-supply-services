import React from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import { AlertDialog } from "native-base";
import { styled } from "../styles/Alert.styles";
import { View } from "react-native";
import { getIconById } from "../../../utils/util";

export function Alert(props) {
  const { show, type, title, message, onClose, loading } = props;
  const styles = styled('info');


  const handleOverlayClick = () => {
    if (!loading) onClose(false)
  };

  return (
    <TouchableWithoutFeedback onPress={handleOverlayClick}>
      <AlertDialog isOpen={show}>
        <AlertDialog.Content>

          <View style={{ justifyContent: "center", flexDirection: "row", paddingTop: 10 }}>
            <View style={styles.icon}>
              {getIconById("iconInfo")}
            </View>
          </View>

          <AlertDialog.Body style={styles.body}>
            <Text style={styles.messageText}>{message}</Text>
          </AlertDialog.Body>
        </AlertDialog.Content>
      </AlertDialog>

    </TouchableWithoutFeedback>
  );
}
