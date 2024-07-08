import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from "./styles/ItemWorkFlow.styles";
import { stylesGlobal } from '../../../modules/styles/global.style';
import { assets } from '../../../assets';
import { LinearGradient } from 'expo-linear-gradient';

export function ItemWorkFlow({ item }) {
  // Divide los empleados en filas de dos
  const employeeRows = [];
  for (let i = 0; i < item.employees.length; i += 2) {
    employeeRows.push(item.employees.slice(i, i + 2));
  }

  return (
    <View style={styles.item}>
      <View style={stylesGlobal.itemHorizontal}>
        <View style={[stylesGlobal.imageMd]}>
          <Image alt="icon-profile" style={[stylesGlobal.imageMin__img, styles.imgProfile]} resizeMode="contain" source={assets.image.png.profile} />
        </View>

        <Text style={styles.item__supervisor}>{item.supervisor}</Text>

        <LinearGradient colors={['#7DA74D', '#7DA74D']} style={styles.item__etqSupervisor}>
          <Text style={styles.item__textSupervisor}>Supervisor</Text>
        </LinearGradient>
      </View>
      <Text style={styles.item__title}>{item.title}</Text>
      <View style={stylesGlobal.itemHorizontal}>
        <View style={stylesGlobal.imageSmall}>
          <Image source={assets.image.png.notice} style={stylesGlobal.imageMin__img} />
        </View>
        <Text style={styles.item__titleCategory}>{item.subTitle}</Text>
      </View>
      <Text style={styles.item__assigned}>Assigned employees: {item?.employees?.length}</Text>
      {employeeRows.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
          {row.map((employee, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <View style={[stylesGlobal.imageMd, { padding: 2 }]}>
                <Image alt="icon-profile" style={[stylesGlobal.imageMin__img, styles.imgProfile]} resizeMode="contain" source={assets.image.png.profile} />
              </View>
              <Text style={styles.item__employee_name}>{employee.name}</Text>
            </View>
          ))}
        </View>
      ))}

      <View style={stylesGlobal.itemHorizontal}>
        <TouchableOpacity style={[styles.btnEdit,stylesGlobal.itemHorizontal]}>
          <View style={[{height:30,width:30,padding:2,marginRight:5}, ]}>
            <Image alt="icon-edit" style={[stylesGlobal.imageMin__img]} resizeMode="contain" source={assets.image.png.iconEdit} />
          </View>
          <Text style={{color:"#fff",fontFamily:"Poppins_400Regular",fontSize:16,paddingTop:8}}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnCancel,stylesGlobal.itemHorizontal]}>
          <View style={[{height:30,width:30,marginRight:5}, ]}>
            <Image alt="icon-edit" style={[stylesGlobal.imageMin__img]} resizeMode="contain" source={assets.image.png.iconCancel} />
          </View>
          <Text style={{color:"#fff",fontFamily:"Poppins_400Regular",fontSize:16,paddingTop:8}}>Cancel</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}