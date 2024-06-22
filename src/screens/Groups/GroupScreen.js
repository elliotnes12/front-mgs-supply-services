import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Image } from 'native-base';
import { Calendar } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { assets } from "../../assets"; // Ajusta la ruta de tus assets si es necesario

const data = [
  { id: '1', title: 'Cleaning' },
  { id: '2', title: 'Painting' },
  // Agrega más elementos según necesites
];

export function GroupScreen() {
  const [selectedId, setSelectedId] = useState(data[0].id); // El primer elemento seleccionado por defecto
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarExpanded, setCalendarExpanded] = useState(false);

  const getImage = (label) => {
    if (label === "Cleaning") {
      return assets.image.png.escoba;
    } else if (label === "Painting") {
      return assets.image.png.botePintura;
    }
    // Agregar otros casos para diferentes imágenes
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

  const initialDates = 7; // Number of initial dates to show when collapsed
  const currentDate = new Date().toISOString().split('T')[0];

  // Get the current year and month
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wes', 'Thu', 'Fri', 'Sat'];
  const paddedDaysArray = Array(firstDayOfMonth).fill(null).concat(daysArray);

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
      <TouchableOpacity onPress={() => setCalendarExpanded(!calendarExpanded)} style={styles.calendarToggle}>
        <Text style={styles.date}></Text>
        <Feather style={{ marginLeft: "90%" }} name={calendarExpanded ? "chevron-up" : "chevron-down"} size={24} color="black" />
      </TouchableOpacity>
      <View style={{ paddingLeft: 18, paddingRight: 18 }}>
        {calendarExpanded ? (
          <Calendar
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
            }}
            markedDates={{
              [selectedDate]: { selected: true, marked: true, selectedColor: '#27AE60' },
            }}
            theme={{
              selectedDayBackgroundColor: '#27AE60',
              todayTextColor: '#27AE60',
              arrowColor: 'black',
            }}
          />
        ) : (
          <View style={styles.collapsedCalendar}>
            <View style={styles.weekDays}>
              {weekDays.map((day, index) => (
                <Text key={index} style={styles.weekDayText}>{day}</Text>
              ))}
            </View>
            <View style={styles.daysContainer}>
              {paddedDaysArray.slice(0, initialDates + firstDayOfMonth).map((day, index) => (
                <View key={index} style={styles.dayWrapper}>
                  {day ? (
                    <TouchableOpacity
                      style={[
                        styles.day,
                        selectedDate === `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
                          ? styles.selectedDay
                          : null
                      ]}
                      onPress={() => {
                        setSelectedDate(`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`);
                      }}
                    >
                      <Text style={styles.dayText}>{day}</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.emptyDay} />
                  )}
                </View>
              ))}
            </View>
          </View>
        )}
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
  selectedButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  unselectedButtonText: {
    color: '#4F4F4F',
    fontSize: 16,
  },
  date: {
    color: "#333333",
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    paddingLeft: 20,
  },
  boxAvailable: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20
  },
  circle: {
    width: 11,
    height: 11,
    backgroundColor: "#27AE60",
    borderRadius: 5.5,
    marginTop: 5,
  },
  calendarToggle: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  collapsedCalendar: {
    padding: 10,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDayText: {
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayWrapper: {
    width: '14.28%', // 100% / 7 days
    aspectRatio: 1, // Make it square
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    width: 35,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    justifyContent: "center",
    marginLeft: 10
  },
  selectedDay: {
    backgroundColor: '#27AE60',
  },
  dayText: {
    color: '#333',
  },
  emptyDay: {
    width: 35,
    height: 30,
  },
});
