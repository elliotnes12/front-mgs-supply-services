import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { assets } from '../../../../assets';
import { styles } from './ServiceListScreenEmployee.styles';
import { stylesGlobal } from '../../../styles/global.style';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../../../utils';

const data = [
  { title: "Office Cleaning", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'progress' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'cancel' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'success' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'success' }

]

const renderStatus = (status) => {
  switch (status) {

    case 'progress':
      return (
        <>
          <View style={[stylesGlobal.itemHorizontal]}>
            <Text style={styles.item__estatus}>Estatus:</Text>
            <View style={[styles.estatus, styles.aprobado]} >
              <Text style={{ color: "#fff" }}>in progress</Text>
            </View>
          </View>
        </>
      )
    case 'cancel':
      return (
        <View style={[stylesGlobal.itemHorizontal]}>
          <Text style={styles.item__estatus}>Estatus:</Text>
          <View style={[styles.estatus, styles.canceled]} >
            <Text style={{ color: "#fff" }}>Canceled</Text>
          </View>
        </View>
      )
    case 'success':
      return (
        <View style={[stylesGlobal.itemHorizontal]}>
          <Text style={styles.item__estatus}>Estatus:</Text>
          <View style={[styles.estatus, styles.success]} >
            <Text style={{ color: "#fff" }}>Success</Text>
          </View>
        </View>
      )
  }
}

const renderItem = ({ item }) => {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.item__img}>
          <Image alt='categoria' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.categoriaUno} />
        </View>
        <View style={styles.item__text}>
          <Text style={styles.item__title}>{item.title}</Text>
          <Text style={styles.item_subtitle}>{item.subTitle}</Text>

          <View style={styles.item__date}>
          <View style={[stylesGlobal.imageSmall]}>
              <Image alt='icon-calendar' resizeMode="cover" style={stylesGlobal.imageMin__img} source={assets.image.png.calendar} />
            </View>
            <Text style={styles.item__datetext} >{item.date}</Text>
          </View>

          {renderStatus(item.status)}

          <TouchableOpacity style={styles.item__flechaContainer}>
            <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const RenderLastServices = () => (


  <View style={styles.scene}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatListContainer}
    />

  </View>
);


export const ServiceListScreenEmployee = () => {
  const navigation = useNavigation();


  return (
    <>
      <View style={styles.options}>
        <Text style={styles.options__title}>Pending services</Text>
        <TouchableOpacity onPress={() => navigation.navigate(screens.tab.services.root)}>
          <Text style={styles.options__all}>View All</Text>
        </TouchableOpacity>
      </View>
      <RenderLastServices />
    </>

  );
}
