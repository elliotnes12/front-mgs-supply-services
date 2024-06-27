import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { assets } from "../../assets";
import { styles } from "./styles/PendingScreen.styles";
import { stylesGlobal } from '../../modules/styles/global.style';

export function PendingScreenEmployee() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Simulación de carga de datos
        setLoading(true);
        setTimeout(() => {
            setTasks([
                {
                    id: 1,
                    title: "Cleaning office",
                    description: "cleaning de lobby area",
                    employees: [
                        { idEmployee: "2323", name: "Jose Luis Carmona" },
                        { idEmployee: "2323", name: "Jorge Antonio Ruiz Perez" },
                    ]
                },
                {
                    id: 2,
                    title: "Cleaning Hospital",
                    description: "cleaning de lobby area",
                    employees: [
                        { idEmployee: "43434", name: "Carlos Roberto Garcia" }
                        
                    ]
                }
            ]);
            setLoading(false);
        }, 1000); // Simulación de retardo de carga
    }, []);

    const renderItem = ({ item }) => (
        <View key={item.id} style={styles.container_item}>
            <View>
                <Text style={styles.office}>{item.title}</Text>
                <View style={styles.notice}>
                    <View style={stylesGlobal.imageMin}>
                        <Image source={assets.image.png.notice} style={stylesGlobal.imageMin__img} />
                    </View>
                    <Text style={{ fontSize: 15 }}>{item.description}</Text>
                </View>
                <Text style={styles.assigned}>Assigned employees: {item.employees.length}</Text>
                <View style={styles.employeeList}>
                    {item.employees.map((employee) => (
                        <View key={employee.idEmployee} style={styles.item}>
                            <View style={styles.item__img}>
                                <Image source={assets.image.png.profile} style={{ width: "100%", height: "100%" }} />
                            </View>
                            <Text style={styles.personalName}>{employee.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.options__item}>
                    <View style={{ width: 35, height: 35 }}>
                        <Image source={assets.image.png.iconsuccess} style={{ width: "100%", height: "100%",  }} />
                    </View>
                    <Text style={styles.complet}>Complet</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderFooter = () => {
        if (!loading) return null;
        return <ActivityIndicator size="large" color="#7DA74D" />;
    };

    return (
        <View style={{ flex: 1}}>
            <LinearGradient style={styles.gradient} colors={['#CEDC39', '#7DA74D']}>
                <SafeAreaView style={styles.safeArea}>
                    <Text style={styles.title}>Services</Text>
                </SafeAreaView>
            </LinearGradient>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                contentContainerStyle={styles.scrollViewContent}
            />
        </View>
    );
}
