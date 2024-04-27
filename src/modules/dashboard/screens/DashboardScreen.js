import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from "../styles/dashboard.styles";
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon, Image } from 'native-base';
import { assets } from "../../../assets";

export function DashboardScreen() {
    return (
        <View style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.btnNewTask}>
                        <Pressable style={styles.taskIcon} >
                            <Icon as={MaterialCommunityIcons} name="plus" size={25} color="#000" />
                        </Pressable>
                        <Text style={styles.labelNewTask}>New Task</Text>
                    </View>
                    <View style={styles.profile}>
                        <Pressable style={styles.alerts} >
                            <Icon as={MaterialCommunityIcons} name="bell-badge-outline" size={33} color="#000" />
                        </Pressable>

                        <Pressable style={styles.goProfile} >
                            <Image style={{ width: "100%", height: "100%" }} resizeMode="cover" source={assets.image.png.profile} />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.welcome}>
                      <Text style={styles.greetings}>
                         <Text style={{fontWeight:"bold",color:"#000"}}>Hi, Max </Text>nice to see you!
                      </Text>
                </View>
            
                 <View style={styles.news}>
                     <View style={styles.headerNews}>
                       <Pressable style={styles.btnNewsActive}  >
                           <Text style={styles.textNewsActive}>Latest Activities</Text>
                        </Pressable>
                        <Pressable style={styles.btnNews}>
                           <Text style={styles.textNews}>All</Text>
                        </Pressable>
                     </View>
                 </View>
            </SafeAreaView>
        </View>
    )
}