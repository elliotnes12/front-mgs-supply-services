import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'native-base';
import { assets } from '../../assets';
import { TextInput } from 'react-native-gesture-handler';





export function ServicesScreen() {

    return (
        <>
            <View style={{ display: "flex", flex: 1, backgroundColor: "#f0f0f0", width: '100%', height: '100%', }}>
                <LinearGradient colors={['#CEDC39', '#7DA74D']} style={{ borderRadius: 10, paddingTop: 70, display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                        <TouchableOpacity>
                            <Image alt='flecha' style={{ width: 30, height: 30, }} source={assets.image.png.flechaizquierda} />
                        </TouchableOpacity>
                        <View style={{ paddingBottom: 30, display: 'flex', }}>
                            <Text style={{ fontSize: 30, color: "#fff", fontFamily: 'Poppins_700Bold', }}> Service</Text>
                            <Text style={{ fontSize: 17, color: "#fff", fontFamily: ' Poppins_400Regular', }}>Available services</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row-reverse', paddingRight: 20,position:'absolute',paddingTop:150 }}>
                    <TouchableOpacity>
                        <View style={{ borderRadius: 10, alignItems: 'center', backgroundColor: '#CEDC39', width: 50, height: 50 }}>
                            <Image alt='calendario' style={{ width: 24, height: 24, marginTop: 10 }} source={assets.image.png.calendarwhite} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ borderRadius: 10, backgroundColor: "#F5F5F5", marginHorizontal: 10, width:450, height: 50, display: 'flex', flexDirection: 'row-reverse', alignContent: 'center', }}>
                        <TextInput style={{ flex: 1, height: '100%', fontSize: 20, }} />
                        <View>
                            <TouchableOpacity>
                                <Image alt='iconlupa' style={{ width: 40, height: 40, }} source={assets.image.png.iconLupa} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                    </View>
                </LinearGradient>
               
                <View style={{ flexDirection: 'row', width: '100%', position: 'relative', marginBottom: 60, height: 120, padding: 20,paddingTop:60 }}>
                    <View style={{ width: 100, height: 100, marginRight: 20, }}>
                        <Image alt='categoria' style={{ width: '100%', height: '100%', }} resizeMode="cover" source={assets.image.png.categoriaUno} />
                    </View>
                    <View style={{ top: -15, paddingTop: 20, flex: 1, }}>
                        <Text style={{ color: "#0F0F0F", fontFamily: 'Poppins_600SemiBold', }}>Oficce clean</Text>
                        <Text style={{ color: "#0F0F0F", fontFamily: 'Poppins_400Regular', }}> Cleaning the lobby area</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: 40, marginTop: 5, justifyContent: "space-between", }}>
                            <Image alt='icon-star-raiting' resizeMode="cover" source={assets.image.png.iconEstrella} />
                            <Text>4.3</Text>
                        </View>
                        <View style={{ paddingLeft: 320 }}>
                            <View style={{ display: "flex", flexDirection: "row", alignContent: 'center', width: 120, marginTop: 5, }}>
                                <View style={{ width: 25, height: 25, marginRight: 10, }}>
                                    <TouchableOpacity>
                                        <Image alt='icon-calendar' resizeMode="cover" style={{ width: "100%", height: "100%" }} source={assets.image.png.calendar} />
                                    </TouchableOpacity>

                                </View>
                                <Text style={{ color: "#C4C4C4", fontSize: 12, fontFamily: ' Poppins_400Regular', }}>may 12, 2024</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ width: 24, height: 24, marginRight: 20, position: 'absolute', right: 0, top: '50%', }}>
                            <Image alt='flecha' style={{ width: '100%', height: '100%', }} resizeMode="cover" source={assets.image.png.flecha} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', width: '100%', position: 'relative', marginBottom: 20, height: 120, padding: 20 }}>
                    <View style={{ width: 100, height: 100, marginRight: 20, }}>
                        <Image alt='categoria' style={{ width: '100%', height: '100%', }} resizeMode="cover" source={assets.image.png.categoriaUno} />
                    </View>
                    <View style={{ top: -15, paddingTop: 20, flex: 1, }}>
                        <Text style={{ color: "#0F0F0F", fontFamily: 'Poppins_600SemiBold', }}>Oficce clean</Text>
                        <Text style={{ color: "#0F0F0F", fontFamily: 'Poppins_400Regular', }}> Cleaning the lobby area</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: 40, marginTop: 5, justifyContent: "space-between", }}>
                            <Image alt='icon-star-raiting' resizeMode="cover" source={assets.image.png.iconEstrella} />
                            <Text>4.3</Text>
                        </View>
                        <View style={{ paddingLeft: 320 }}>
                            <View style={{ display: "flex", flexDirection: "row", alignContent: 'center', width: 120, marginTop: 5, }}>
                                <View style={{ width: 25, height: 25, marginRight: 10, }}>
                                    <Image alt='icon-calendar' resizeMode="cover" style={{ width: "100%", height: "100%" }} source={assets.image.png.calendar} />
                                </View>
                                <Text style={{ color: "#C4C4C4", fontSize: 12, }}>may 12, 2024</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{ width: 24, height: 24, marginRight: 20, position: 'absolute', right: 0, top: '50%', }}>
                            <Image alt='flecha' style={{ width: '100%', height: '100%', }} resizeMode="cover" source={assets.image.png.flecha} />
                        </TouchableOpacity>

                    </View>
                </View>


                <View style={{ flexDirection: 'row', width: '100%', position: 'relative', marginBottom: 20, height: 120, padding: 20 }}>
                    <View style={{ width: 100, height: 100, marginRight: 20, }}>
                        <Image alt='categoria' style={{ width: '100%', height: '100%', }} resizeMode="cover" source={assets.image.png.categoriaUno} />
                    </View>
                    <View style={{ top: -15, paddingTop: 20, flex: 1, }}>
                        <Text style={{ color: "#0F0F0F", fontFamily: 'Poppins_600SemiBold', }}>Oficce clean</Text>
                        <Text style={{ color: "#0F0F0F", fontFamily: 'Poppins_400Regular', }}> Cleaning the lobby area</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: 40, marginTop: 5, justifyContent: "space-between", }}>
                            <Image alt='icon-star-raiting' resizeMode="cover" source={assets.image.png.iconEstrella} />
                            <Text>4.3</Text>
                        </View>
                        <View style={{ paddingLeft: 320 }}>
                            <View style={{ display: "flex", flexDirection: "row", alignContent: 'center', width: 120, marginTop: 5, }}>
                                <View style={{ width: 25, height: 25, marginRight: 10, }}>
                                    <Image alt='icon-calendar' resizeMode="cover" style={{ width: "100%", height: "100%" }} source={assets.image.png.calendar} />
                                </View>
                                <Text style={{ color: "#C4C4C4", fontSize: 12, }}>may 12, 2024</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ width: 24, height: 24, marginRight: 20, position: 'absolute', right: 0, top: '50%', }}>
                            <Image alt='flecha' style={{ width: '100%', height: '100%', }} resizeMode="cover" source={assets.image.png.flecha} />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </>



    )
}