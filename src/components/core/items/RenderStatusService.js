import React from "react";
import { styles } from "./styles/RenderStatusServices";
import { stylesGlobal } from "../../../modules/styles/global.style";
import { Text, View } from "react-native";
import StyledText from "../../../utils/globalstyle";

export function RenderStatusService({ status }) {
  const renderStatus = (status) => {
    switch (status) {
      case "progress":
        return (
          <>
            <View style={[stylesGlobal.itemHorizontal]}>
              <StyledText font10pt regularGray style={styles.item__estatus}>
                Estatus:
              </StyledText>
              <View style={[styles.estatus, styles.aprobado]}>
                <StyledText font10pt white regularGray>
                  in progress
                </StyledText>
              </View>
            </View>
          </>
        );
      case "cancel":
        return (
          <View style={[stylesGlobal.itemHorizontal]}>
            <StyledText font10pt regularGray style={styles.item__estatus}>
              Estatus:
            </StyledText>
            <View style={[styles.estatus, styles.canceled]}>
              <StyledText font10pt white regularGray>
                Canceled
              </StyledText>
            </View>
          </View>
        );
      case "success":
        return (
          <View style={[stylesGlobal.itemHorizontal]}>
            <StyledText font10pt regularGray style={styles.item__estatus}>
              Estatus:
            </StyledText>
            <View style={[styles.estatus, styles.success]}>
              <StyledText font10pt white regularGray>
                Success
              </StyledText>
            </View>
          </View>
        );
    }
  };
  return <>{renderStatus(status)}</>;
}
