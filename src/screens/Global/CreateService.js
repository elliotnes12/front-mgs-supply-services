import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Image } from 'native-base';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { assets } from "../../assets";
import { styles } from "./styles/CreateService.style";
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import MapView, { Marker } from 'react-native-maps';

const data = [
  { id: '1', title: 'Cleaning' },
  { id: '2', title: 'Painting' },
  { id: '3', title: 'Polishing' }
];

const dataEmployees = [
  { id: '1', name: 'Elliot Guillermo Garcia Montoya' },
  { id: '2', name: 'Nazario Perez Lopez' }
];

export function CreateService() {
  const [selectedId, setSelectedId] = useState(data[0].id);
  const [location, setLocation] = useState('Av. 3 Calle 4 with corner 24, reference cc Rodeo');
  const [bussinessName, setBussinessName] = useState('CORPORATION VILLA NUEVA LLC');
  const [searchText, setSearchText] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(dataEmployees);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleMapPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setLocation(`${latitude}, ${longitude}`);
    toggleModal();
  };

  const getImage = (label) => {
    if (label === "Cleaning") {
      return assets.image.png.iconEscoba;
    } else if (label === "Painting") {
      return assets.image.png.iconBotePintura;
    } else if (label === "Polishing") {
      return assets.image.png.destellos;
    }
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity style={{ marginHorizontal: 5, marginTop: 20 }} onPress={() => setSelectedId(item.id)}>
        {isSelected ? (
          <LinearGradient style={{ borderRadius: 20, height: 45, width: 110, justifyContent: "center", alignItems: "center", flexDirection: "row" }} colors={['#CEDC39', '#7DA74D']}>
            <View style={{ width: 20, height: 20, marginRight: 5 }}>
              <Image alt="tabs" style={{ width: "100%", height: "100%" }} resizeMode="contain" source={getImage(item.title)} />
            </View>
            <Text style={{color:"#fff"}}>{item.title}</Text>
          </LinearGradient>
        ) : (
          <View style={{ borderWidth: 1, borderColor: "#4F4F4F", borderRadius: 20, height: 45, width: 110, justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: '#fff' }}>
            <View style={{ width: 20, height: 20, marginRight: 5 }}>
              <Image alt="tabs" style={{ width: "100%", height: "100%" }} resizeMode="contain" source={getImage(item.title)} />
            </View>
            <Text style={styles.unselectedButtonText}>{item.title}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderEmployee = ({ item }) => {
    return (
      <View style={[styles.item, { height: 44 }]}>
        <View style={{ width: 30, height: 30, marginRight: 15, marginLeft: 5, borderRadius: 40, overflow: "hidden" }}>
          <Image alt="icon profile" style={{ width: "100%", height: "100%" }} source={assets.image.png.profile} />
        </View>
        <Text>{item.name}</Text>
        <TouchableOpacity style={{ width: 15, height: 15, position: "absolute", right: 10 }} >
          <Image alt="icon delete employee" style={{ width: "100%", height: "100%" }} source={assets.image.png.iconClose} />
        </TouchableOpacity>
      </View>
    );
  };

  const handleSearch = () => {
    const results = dataEmployees.filter(employee =>
      employee.name.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.id.includes(searchText)
    );
    setFilteredEmployees(results);
  };

  return (
    <>
      <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.header}>
        <SafeAreaView style={styles.header__content}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 35, height: 35, marginRight: 10 }}>
            <Image alt="icon goBack" style={{ width: "100%", height: "100%" }} source={assets.image.png.flechaizquierda} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Create a Service</Text>
            <Text style={styles.subTitle}>Create of the generated services</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <FlatList
        style={styles.container}
        ListHeaderComponent={
          <>
            <View>
              <Text style={[styles.textGray, styles.titleServices]}>Select a service</Text>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={[styles.textGray, styles.titleServices]}>Set date & time</Text>
              <TouchableOpacity style={styles.item}>
                <View style={{ width: 35, height: 35, marginRight: 15 }}>
                  <Image alt="icon choose a date" style={{ width: "100%", height: "100%" }} source={assets.image.png.calendar} />
                </View>
                <Text>Choose a date</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <View style={{ width: 35, height: 35, marginRight: 15 }}>
                  <Image alt="icon choose a schedule" style={{ width: "100%", height: "100%" }} source={assets.image.png.calendar} />
                </View>
                <Text>Schedule</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.item]}>
                <View style={{ width: 30, height: 30, marginRight: 15 }}>
                  <Image alt="icon search employees" style={{ width: "100%", height: "100%" }} source={assets.image.png.iconLupa} />
                </View>
                <Text>Search by name or id employee</Text>
              </TouchableOpacity>
              <View style={styles.employees}>
                <Text style={[styles.titleServices, { marginBottom: 5 }]}>Employees</Text>
                <FlatList
                  data={filteredEmployees}
                  renderItem={renderEmployee}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.flatListContainer}
                />
              </View>
              <Text style={[styles.textGray, styles.titleServices]}>Service Location</Text>
              <View style={styles.item}>
                <View style={styles.street}>
                  <Text style={styles.street__label}>{location}</Text>
                </View>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.street__googleMaps}>SET GOOGLE MAP</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bussiness}>
                <Text style={styles.bussiness__title}>Bussiness Details</Text>
                <Text style={[styles.textGray, styles.titleServices]}>Bussiness Name</Text>
                <Text style={styles.bussiness__name}>{bussinessName}</Text>

                <Text style={[styles.textGray, styles.titleServices]}>Additional Message</Text>
                <TextInput
                  style={styles.textArea}
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => setBussinessAdditional(text)}
                  placeholder="Enter your text here"
                />
              </View>
              <View style={styles.submit}>
                <TouchableOpacity>
                  <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.button}>
                    <Text style={styles.button__text}>Appoinment a Service</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </>
        }
      />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleMapPress}
          >
            <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              title="Selected Location"
              description={location}
            />
          </MapView>
          <TouchableOpacity onPress={toggleModal} style={{ position: 'absolute', top: 40, right: 20 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}
