import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Image } from 'native-base';
import { assets } from "../../assets"; 

const data = [
  { id: '1', title: 'Cleaning' },
  { id: '2', title: 'Painting' },
];

export function GroupScreen() {
  const [selectedId, setSelectedId] = useState(data[0].id); 

  const getImage = (label) => {
    if (label === "Cleaning") {
      return assets.image.png.iconEscoba;
    } else if (label === "Painting") {
      return assets.image.png.iconBotePintura;
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity style={styles.button} onPress={() => setSelectedId(item.id)}>
        {isSelected ? (
          <LinearGradient style={styles.selectedButton} colors={['#CEDC39', '#7DA74D']}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} resizeMode="contain" source={getImage(item.title)} />
            </View>
            <Text style={styles.selectedButtonText}>{item.title}</Text>
          </LinearGradient>
        ) : (
          <View style={[styles.unselectedButton]}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} resizeMode="contain" source={getImage(item.title)} />
            </View>
            <Text style={styles.unselectedButtonText}>{item.title}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };



  return (
    <View>
      <LinearGradient style={styles.gradient} colors={['#CEDC39', '#7DA74D']}>
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.title}>Create a Service</Text>
          <Text style={styles.subtitle}>Schedule a service with us</Text>
        </SafeAreaView>
      </LinearGradient>
      <Text style={styles.selectServiceText}>Select a service</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={styles.date}>Set date & time</Text>
        <View style={styles.boxAvailable}>
          <View style={[styles.circle, { backgroundColor: "#27AE60", marginRight: 5 }]}></View><Text>Available</Text>
          <View style={[styles.circle, { marginLeft: 15, marginRight: 5, backgroundColor: "#EB5757" }]}></View><Text>No Available</Text>
        </View>
      </View>
  

      <Text style={{ color: "#828282", fontSize: 17, paddingLeft: 30 }}>Service Location</Text>
      <View style={{ display: "flex", marginTop: 15, justifyContent: "space-between", flexDirection: "row", paddingLeft: 30, paddingRight: 30 }}>

        <Text style={{ width: 220, color: "#333" }}>Av. 3 Calle 4 with corner 24, reference cc Rodeo</Text>
        <TouchableOpacity>
          <Text style={{color:"#7DA74D",textDecorationLine:"underline"}}>SET GOOGLE MAP</Text>
        </TouchableOpacity>


      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  gradient: {
    height: 170,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  safeArea: {
    padding: 40,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
  },
  subtitle: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  selectServiceText: {
    marginTop: 20,
    paddingLeft: 20,
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  flatListContainer: {
    paddingVertical: 20,
    paddingLeft: 10,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 5,
  },
  selectedButton: {
    borderRadius: 20,
    height: 45,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  unselectedButton: {
    borderWidth: 1,
    borderColor: "#4F4F4F",
    borderRadius: 20,
    height: 45,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },


});
