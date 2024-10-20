import React, { } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles/ItemWorkFlow.styles";
import { stylesGlobal } from "../../../modules/styles/global.style";
import { LinearGradient } from "expo-linear-gradient";
import { getIconById } from "../../../utils/util";
import StyledText from "../../../utils/globalstyle";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../utils";

export function ItemWorkFlow({ item, setIsModalVisible, setSelectedId }) {

  const navigation = useNavigation();

  const employeeRows = [];
  for (let i = 0; i < item.employees.length; i += 2) {
    employeeRows.push(item.employees.slice(i, i + 2));
  }



  return (
    <View style={styles.item}>
      <View style={stylesGlobal.itemHorizontal}>
        <View style={[stylesGlobal.imageMd, styles.imgProfile]}>
          {getIconById("iconAvatar")}
        </View>
        <View style={styles.item__supervisor}>
          <StyledText font17pt bold>
            {item?.supervisor?.name + " " + item?.supervisor.lastName}
          </StyledText>
        </View>

        <LinearGradient
          colors={["#CEDC39", "#7DA74D"]}
          style={styles.item__etqSupervisor}
        >
          <StyledText font14pt regularWhite>
            Supervisor
          </StyledText>
        </LinearGradient>
      </View>
      <StyledText font16pt bold>
        {item?.customer?.businessType} {item.category}
      </StyledText>
      <View style={stylesGlobal.itemHorizontal}>
        <View style={stylesGlobal.imageSmall}>{getIconById("notice")}</View>
        <View style={styles.item__titleCategory}>
          <StyledText font14pt regularGray>
            {item.category} the {item?.customer?.businessType}
          </StyledText>
        </View>
      </View>
      <View style={styles.item__assigned}>
        <StyledText font14pt regularGray>
          Assigned employees: {item?.employees?.length}
        </StyledText>
      </View>

      {employeeRows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          {row.map((employee, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              <View style={[stylesGlobal.imageMd, styles.imgProfile]}>
                {getIconById("iconAvatar")}
              </View>
              <View style={styles.item__employee_name}>
                <StyledText font14pt regularGray>
                  {employee.name + " " + employee.lastName}
                </StyledText>
                <StyledText font14pt regularGray>
                  {employee.idEmployee}
                </StyledText>
              </View>
            </View>
          ))}
        </View>
      ))}

      <View style={stylesGlobal.itemHorizontal}>
        <TouchableOpacity onPress={() => {
          navigation.navigate(
            screens.global.updateService,
            {
              serviceId: item.id
            }
          )
        }} style={[styles.btnEdit, stylesGlobal.itemHorizontal]}>
          <View
            style={[
              stylesGlobal.imageMin,
              { marginRight: 10, marginBottom: 5 },
            ]}
          >
            {getIconById("iconEditWhite")}
          </View>
          <StyledText font14pt regularWhite>
            Edit
          </StyledText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnCancel, stylesGlobal.itemHorizontal]}
          onPress={() => {
            setIsModalVisible(true)
            setSelectedId(item.id)
          }}
        >
          <View style={[{ height: 30, width: 30, marginRight: 5 }]}>
            {getIconById("iconCancel")}
          </View>
          <StyledText font14pt regularWhite>
            Cancel
          </StyledText>
        </TouchableOpacity>
      </View>

    </View>
  );
}
