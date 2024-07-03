import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'native-base';
import { assets } from '../../assets';
import { TextInput } from 'react-native-gesture-handler';
import { ItemService } from '../../components/core/ItemService';
import { styles } from './styles/ServicesScreen.style';
import { stylesGlobal } from '../../modules/styles/global.style';
import { Header } from '../../components/core/Header';





export function ServicesScreen() {

    const data = [
        { title: "Office Cleaning", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
        { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
        { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
        { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
        { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
        { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
        { title: "Office Cleaning 2", subTitle: "Cleaning the lobby area", date: "May 12, 2024", raiting: '4.8' },
    ]

    const search = (search) =>{
         console.log("tiene buscador")
    }

    return (
        <>
            <View style={{ display: "flex", flex: 1, backgroundColor: "#f0f0f0", width: '100%', height: '100%', }}>
            

               <Header search={search} />


                <FlatList
                    data={data}
                    renderItem={ItemService}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.flatListContainer}
                />



            </View>
        </>



    )
}