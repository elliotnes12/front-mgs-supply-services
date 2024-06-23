import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
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
                                <View style={styles.promos__label}>
                                     <Text style={{color:'#7EA74C'}}>New</Text>
                                </View>
                                <Text style={styles.promos__title}>
                                Register Your service via chat 
                                </Text>

                                <Image alt='fondo'  resizeMode="cover" source={assets.image.png.pleca} />
                                <Image alt='register-service' style={styles.promos__bgman} resizeMode="cover" source={assets.image.png.mujer} />

                            </LinearGradient>
                        </View>

                        <Text style={styles.titleCategories}>
                            Choose a category
                        </Text>
                        <View style={styles.tabViewContainer}>
                            <ServiceListScreenCt />
                        </View>
                    </>
                )}

                {!isCustomer && userInfo.type === "supervisor" && (
                    <>
                        <View style={styles.options}>
                            <Text style={styles.options__title}>Services Generated</Text>
                            <TouchableOpacity>
                                <Text style={styles.options__all}>ViewAll</Text>
                            </TouchableOpacity>
                        </View>
                        <ServiceListScreenSp />
                    </>
                )}
            </SafeAreaView>
        </View>
    )
};