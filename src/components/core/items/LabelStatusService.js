import React from "react";
import { styles } from "./styles/LabelStatusServices.styles";
import { stylesGlobal } from "../../../modules/styles/global.style";
import { Text, View } from "react-native";
import StyledText from "../../../utils/globalstyle";

export function LabelStatusService({ status }) {

  const renderStatus = (status) => {
    switch (status) {
      case "in_progress":
        return (
          <>
            <View style={[stylesGlobal.itemHorizontal]}>
              <View style={[styles.estatus, styles.aprobado]}>
                <StyledText font14pt white regularGray>
                  in progress
                </StyledText>
              </View>
            </View>
          </>
        );
      case "cancelled":
        return (
          <View style={[stylesGlobal.itemHorizontal]}>
            <View style={[styles.estatus, styles.canceled]}>
              <StyledText font14pt white regularGray>
                Canceled
              </StyledText>
            </View>
          </View>
        );
      case "completed":
        return (
          <View style={[stylesGlobal.itemHorizontal]}>
            <View style={[styles.estatus, styles.success]}>
              <StyledText font14pt white regularGray>
                Success
              </StyledText>
            </View>
          </View>
        );
    }
  };
  return <>{renderStatus(status)}</>;
}
