import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'native-base';
import { assets } from "../../../assets";
import { useAuth } from '../../Auth/hooks';
import { ServiceListScreenCt } from './customer/ServiceListScreen';
import { ServiceListScreenSp } from './supervisor/ServiceListScreenSupervisor';
import { styles } from "../styles/dashboard.styles";

export function DashboardScreen() {
    const { userInfo, isCustomer } = useAuth();
    const { name } = userInfo;

    return (
        <View style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.profile}>
                        <View style={styles.containerProfile}>
                            <Pressable style={styles.goProfile}>
                                <Image alt='profile' style={styles.imageProfile} resizeMode="cover" source={assets.image.png.profile} />
                            </Pressable>
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userInfo__hello}>Hello,</Text>
                            <Text style={styles.userInfo__name}>{name}</Text>
                        </View>
                    </View>
                    <Pressable style={styles.alerts}>
                        <Image alt='alerts' style={styles.imageAlerts} resizeMode="cover" source={assets.image.png.alerts} />
                    </Pressable>
                </View>

                {isCustomer && (
                    <>
                        <View style={styles.promos}>
                            <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.bgpromos}>
                                <Text style={styles.promoText}>service via chat</Text>
                                <Text style={styles.promoLastService}>New</Text>
                                <Text style={styles.promoDaysAgo}></Text>
                                <Text style={styles.promoRating}></Text>
                                <Text style={styles.promoTitle}>register your </Text>
                                <Image alt='mujer' style={styles.promos__bgman} resizeMode="cover" source={assets.image.png.mujer} />
                                
                            </LinearGradient>
                        </View>

                        <Text style={styles.tituloCategorias}>
                            Choose a category
                        </Text>
                        <View style={styles.tabViewContainer}>
                            <ServiceListScreenCt />
                        </View>
                    </>
                )}

                {!isCustomer && userInfo.type === "supervisor" && (
                    <>
                        <Text style={styles.title}>Services Generated</Text>
                        <Text style={styles.viewAll}>View All</Text>
                        <ServiceListScreenSp />
                    </>
                )}
            </SafeAreaView>
        </View>
    )
};