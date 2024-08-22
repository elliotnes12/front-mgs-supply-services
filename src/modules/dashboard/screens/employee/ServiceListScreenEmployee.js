import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './ServiceListScreenEmployee.styles';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../../../utils';
import { ItemServiceEmployee } from '../../../../components/core/items/ItemService';

const data = [
  { title: "Office Cleaning", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'progress' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'cancel' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'success' },
  { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", status: 'success' }

]


const RenderLastServices = () => (


  <View style={styles.scene}>
    <FlatList
      data={data}
      renderItem={ItemServiceEmployee}
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
