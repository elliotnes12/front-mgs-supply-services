import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { assets } from "../../assets";
import { styles } from "./styles/PendingScreen.styles";

export function PendingScreen() {
    const [tasks, setTasks] = useState([]);
    const [countEmployees, setCountEmployees] = useState(2);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    // Simula la carga de datos desde una API
    const fetchTasks = async (pageNumber) => {
        setLoading(true);
        // Aquí puedes realizar una llamada a la API para obtener los datos
        // Por ahora, simplemente simulamos la carga de datos
        const newTasks = Array.from({ length: 4 }, (_, index) => ({
            id: (pageNumber - 1) * 2 + index + 1,
            title: 'Office Cleaning',
            description: 'Cleaning the lobby area'
        }));
        setTasks(prevTasks => [...prevTasks, ...newTasks]);
        setLoading(false);
    };

    useEffect(() => {
        if (page == 1) {

            fetchTasks(page)
        }

    }, []);

    const handleLoadMore = () => {
        //setPage(prevPage => prevPage + 1);
    };

    const renderItem = ({ item }) => (
        <View key={item.id} style={styles.container}>
            <View>
            <Text style={styles.office}>{item.title}</Text>
            <View style={styles.notice}>
                <View style={{ width: 20, height: 20, marginRight: 5 }}>
                    <Image source={assets.image.png.notice} style={styles.notice__img} />
                </View>
                <Text style={{ fontSize: 15 }}>{item.description}</Text>
            </View>
            <Text style={styles.assigned}>Assigned employees: {countEmployees}</Text>
            <View style={styles.employeeList}>
                <View style={styles.item}>
                    <View style={styles.item__img}>
                        <Image source={assets.image.png.profile} style={{ width: "100%", height: "100%" }} />
                    </View>
                    <Text style={styles.personalName}>Anna Rachel</Text>
                </View>
                <View style={styles.item}>
                    <View style={styles.item__img}>
                        <Image source={assets.image.png.profile} style={{ width: "100%", height: "100%" }} />
                    </View>
                    <Text style={styles.personalName}>Jose Luis Tovar</Text>
                </View>
            </View>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.options__item}>
                    <View style={{ width: 35, height: 35 }}>
                        <Image source={assets.image.png.iconEdit} style={{ width: "100%", height: "100%" }} />
                    </View>
                    <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.options__item}>
                    <View style={{ width: 35, height: 35 }}>
                        <Image source={assets.image.png.decline} style={{ width: "100%", height: "100%" }} />
                    </View>
                    <Text style={styles.decline}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderFooter = () => {
        if (!loading) return null;
        return <ActivityIndicator size="large" color="#7DA74D" />;
    };

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient style={styles.gradient} colors={['#CEDC39', '#7DA74D']}>
                <SafeAreaView style={styles.safeArea}>
                    <Text style={styles.title}>Services</Text>
                </SafeAreaView>
            </LinearGradient>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                contentContainerStyle={styles.scrollViewContent}
            />
        </View>
    );
}
