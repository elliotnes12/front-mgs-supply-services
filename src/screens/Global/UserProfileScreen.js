import { View, Text, } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import { FlatList, Image } from 'native-base';
import styles from 'react-native-material-dropdown-v2/src/components/dropdown/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { assets } from "../../assets";

const data = [
  { id: '1', title: 'Cleaning' },
  { id: '2', title: 'Painting' },
  { id: '3', title: 'poloshing' },
];

export function UserProfileScreen() {
  const [selectedId, setSelectedId] = useState(data[0].id);

  const getImage = (label) => {
    if (label === "Cleaning") {
      return assets.image.png.iconEscoba;
    } else if (label === "Painting") {
      return assets.image.png.iconBotePintura;
    } else if (label === "poloshing") {
      return assets.image.png.destellos;
    }

  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity style={{ marginHorizontal: 5, marginTop: 20, }} onPress={() => setSelectedId(item.id)}>
        {isSelected ? (
          <LinearGradient style={{ borderRadius: 20, height: 45, width: 110, justifyContent: "center", alignItems: "center", flexDirection: "row", }} colors={['#CEDC39', '#7DA74D']}>
            <View style={{ width: 20, height: 20, marginRight: 5, }}>
              <Image style={{ width: "100%", height: "100%", }} resizeMode="contain" source={getImage(item.title)} />
            </View>
            <Text style={styles.selectedButtonText}>{item.title}</Text>
          </LinearGradient>
        ) : (
          <View style={{ borderWidth: 1, borderColor: "#4F4F4F", borderRadius: 20, height: 45, width: 110, justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: '#fff', }}>
            <View style={{ width: 20, height: 20, marginRight: 5, }}>
              <Image style={{ width: "100%", height: "100%", }} resizeMode="contain" source={getImage(item.title)} />
            </View>
            <Text style={styles.unselectedButtonText}>{item.title}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };



  return (
    <>
      <LinearGradient colors={['#CEDC39', '#7DA74D']} style={{ width: "100%", height: 160 }} >

        <View style={{ display: 'flex', flexDirection: 'row', height: 160 }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', width: '100%', }}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginHorizontal: 50, }}>
              <Text style={{ fontSize: 20, color: "#FFFFFF", fontFamily: 'Poppins_700Bold', }}>Create a Service</Text>
              <Text style={{ fontSize: 15, color: "#FFFFFF", fontFamily: 'Poppins_400Regular', }}>schedule a service with us</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={{ marginTop: 20, padding: 25}}>
        <Text style={{ color: "#828282" }}>Select a service</Text>
      </View>
      <View style={{ marginTop:20, padding: 25 }}>
        <Text style={{ color: "#828282" }}>Set data & time</Text>
      </View>
      <View>
      <View styles={{ display: 'flex', flexDirection: 'row', padding: 25}}>
        <Image alt='icon-calendar' source={assets.image.png.calendardos} />
        <Text style={{ color: "#828282" }}>Choose a date</Text>
      </View>
      </View>


      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </>

  )

}


