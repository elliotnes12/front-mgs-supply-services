import React from 'react'
import { RenderStatusService } from './RenderStatusService';
import { styles } from "../styles/ItemServive.style";
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../../../modules/styles/global.style';
import { assets } from '../../../assets';

export function ItemServiceEmployee({ item }) {
    return (
        <View style={styles.item}>
            <View style={styles.item__img}>
                <Image alt='categoria' style={stylesGlobal.imageMin__img} resizeMode="contain" source={assets.image.png.minService} />
            </View>
            <View style={styles.item__text}>
                <Text style={styles.item__title}>{item.title}</Text>
                <Text style={styles.item_subtitle}>{item.subTitle}</Text>

                <View style={styles.item__date}>
                    <View style={[stylesGlobal.imageSmall]}>
                        <Image alt='icon-calendar' resizeMode="cover" style={stylesGlobal.imageMin__img} source={assets.image.png.calendar} />
                    </View>
                    <Text style={styles.item__datetext} >{item.date}</Text>
                </View>

                <RenderStatusService status={item.status} />

                <TouchableOpacity style={styles.item__flechaContainer}>
                    <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.flecha} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
