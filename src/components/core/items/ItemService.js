

import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { styles } from "../styles/ItemServive.style";
import { assets } from '../../../assets';
import { stylesGlobal } from '../../../modules/styles/global.style';
import { RenderStatusService } from './RenderStatusService';

export function ItemService({ item }) {
    return (
        <>
            <View style={styles.item}>
                <View style={styles.item__img}>
                    <Image alt='categoria' style={stylesGlobal.imageMin__img} resizeMode="contain" source={assets.image.png.minService} />
                </View>
                <View style={styles.item__text}>
                    <Text style={styles.item__title}>{item.title}</Text>
                    <Text style={styles.item_subtitle}>{item.subTitle}</Text>
                    <View style={styles.item__raiting}>
                        <Image alt='icon-star-raiting' resizeMode="cover" source={assets.image.png.iconRaiting} />
                        <Text style={styles.item__raitingtext} >{item.raiting}</Text>
                    </View>

                    <View style={styles.item__date}>
                        <View style={[stylesGlobal.imageSmall]}>
                            <Image alt='icon-calendar' resizeMode="cover" style={stylesGlobal.imageMin__img} source={assets.image.png.iconCalendar} />
                        </View>
                        <Text style={styles.item__datetext} >{item.date}</Text>
                    </View>

                    <TouchableOpacity style={styles.item__flechaContainer}>
                        <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.iconFlecha} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}


export function ItemServiceManager({ item }) {
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
                        <Image alt='icon-calendar' resizeMode="contain" style={stylesGlobal.imageMin__img} source={assets.image.png.iconCalendar} />
                    </View>
                    <Text style={styles.item__datetext} >{item.date}</Text>
                </View>

                <RenderStatusService status={item.status} />

                <TouchableOpacity style={styles.item__flechaContainer}>
                    <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.iconFlecha} />
                </TouchableOpacity>
            </View>
        </View>
    )
}




export function ItemServiceSupervisor({ item }) {
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
                        <Image alt='icon-calendar' resizeMode="cover" style={stylesGlobal.imageMin__img} source={assets.image.png.iconCalendar} />
                    </View>
                    <Text style={styles.item__datetext} >{item.date}</Text>
                </View>

                <RenderStatusService status={item.status} />

                <TouchableOpacity style={styles.item__flechaContainer}>
                    <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.iconFlecha} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

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
                        <Image alt='icon-calendar' resizeMode="cover" style={stylesGlobal.imageMin__img} source={assets.image.png.iconCalendar} />
                    </View>
                    <Text style={styles.item__datetext} >{item.date}</Text>
                </View>

                <RenderStatusService status={item.status} />

                <TouchableOpacity style={styles.item__flechaContainer}>
                    <Image alt='flecha' style={styles.imageFullSize} resizeMode="cover" source={assets.image.png.iconFlecha} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
