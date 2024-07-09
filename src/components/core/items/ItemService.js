

import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import {styles} from "../styles/ItemServive.style";
import { assets } from '../../../assets';
import { stylesGlobal } from '../../../modules/styles/global.style'; 

export function ItemService({item}) {
    return (
        <>
            <View style={styles.item}>
                <View style={styles.item__img}>
                    <Image alt='categoria' style={stylesGlobal.imageMin__img} resizeMode="contain" source={assets.image.png.categoriaUno} />
                </View>
                <View style={styles.item__text}>
                    <Text style={styles.item__title}>{item.title}</Text>
                    <Text style={styles.item_subtitle}>{item.subTitle}</Text>
                    <View style={styles.item__raiting}>
                        <Image alt='icon-star-raiting' resizeMode="cover" source={assets.image.png.iconEstrella} />
                        <Text style={styles.item__raitingtext} >{item.raiting}</Text>
                    </View>

                    <View style={styles.item__date}>
                        <View style={[stylesGlobal.imageSmall]}>
                            <Image alt='icon-calendar' resizeMode="cover" style={stylesGlobal.imageMin__img} source={assets.image.png.calendar} />
                        </View>
                        <Text style={styles.item__datetext} >{item.date}</Text>
                    </View>

                    <TouchableOpacity style={styles.item__flechaContainer}>
                        <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}