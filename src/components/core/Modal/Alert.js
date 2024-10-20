import React from "react";
import { Text, TouchableWithoutFeedback, View, ActivityIndicator } from "react-native";
import { AlertDialog } from "native-base";
import { styled } from "../styles/Alert.styles";
import { getIconById } from "../../../utils/util";
import StyledText from "../../../utils/globalstyle";

export function Alert(props) {
  const { show, type, message, onClose, loading } = props;
  const styles = styled(type);

  const handleOverlayClick = () => {
    if (!loading) {
      onClose(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOverlayClick}>
      <AlertDialog isOpen={show}>
        <AlertDialog.Content
          style={{
            shadowColor: "transparent",
            backgroundColor: loading ? 'transparent' : '#fff',
            padding: 0,
          }}
        >
          {loading ? (
            <View style={{ justifyContent: "center", alignItems: "center", padding: 20 }}>
              <ActivityIndicator size="large" color="#fff" />
            </View>
          ) : (
            <>
              <View style={{ justifyContent: "center", flexDirection: "row", paddingTop: 10 }}>
                <View style={styles.icon}>
                  {getIconById("iconInfo")}
                </View>
              </View>

                <AlertDialog.Body style={styles.body}>
                  <Text style={styles.messageText}>{message}</Text>
                </AlertDialog.Body>
            </>
          )}
        </AlertDialog.Content>
      </AlertDialog>
    </TouchableWithoutFeedback>
  );
}
