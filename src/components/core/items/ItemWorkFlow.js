import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles/ItemWorkFlow.styles";
import { stylesGlobal } from "../../../modules/styles/global.style";
import { assets } from "../../../assets";
import { LinearGradient } from "expo-linear-gradient";
import { getIconById } from "../../../utils/util";
import StyledText from "../../../utils/globalstyle";

export function ItemWorkFlow({ item }) {
  // Divide los empleados en filas de dos
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
            {item.supervisor}
          </StyledText>
        </View>

        <LinearGradient
          colors={["#CEDC39", "#7DA74D"]}
          style={styles.item__etqSupervisor}
        >
          <View style={styles.item__textSupervisor}>
            <StyledText font14pt regularWhite>
              Supervisor
            </StyledText>
          </View>
        </LinearGradient>
      </View>
      <StyledText font16pt bold>
        {item.title}
      </StyledText>
      <View style={stylesGlobal.itemHorizontal}>
        <View style={stylesGlobal.imageSmall}>{getIconById("notice")}</View>
        <View style={styles.item__titleCategory}>
          <StyledText font14pt regularGray>
            {item.subTitle}
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
                  {employee.name}
                </StyledText>
              </View>
            </View>
          ))}
        </View>
      ))}

      <View style={stylesGlobal.itemHorizontal}>
        <TouchableOpacity style={[styles.btnEdit, stylesGlobal.itemHorizontal]}>
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
