import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import IonIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc'
import { ENV } from '../utils';
import { theme } from '../utils/theme';
import { StyledGradientButton } from '../utils/globalstyle';

export default ({ toggleModal, setDateFrom, setDateUntil }) => {
    const language = '0'
    let currenDay = 0;
    let currentMonth = 0;
    const [range, setRange] = useState({
        from: undefined,
        dataFrom: {
            day: '--',
            month: '--',
            year: '----',
            initial: null,
            complete: null,
        },
        until: undefined,
        dataUntil: {
            day: '--',
            month: '--',
            year: '----',
            ending: null,
            complete: null,
        },
    })


    const getCurrentDate = () => {
        let date = new Date()
        let day = date.getDate()
        currenDay = day;
        let month = date.getMonth() + 1
        currentMonth = date.getMonth()
        let year = date.getFullYear()
        let full = null;

        full = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

        return full;
    }



    const { from, until, dataFrom, dataUntil } = range


    const [initialState, setInitialState] = useState({
        current: 1,
        mesCuenta: 1,
        dia: currenDay,
        mes: parseInt(getCurrentDate().substring(5, 7)),
        año: getCurrentDate().substring(0, 4),
        actual: new Date(getCurrentDate().substring(0, 4), (parseInt(getCurrentDate().substring(5, 7)) - 1), parseInt(getCurrentDate().substring(8, 10))),
        complete: false,
        requestDate: {
            origin: `${language === '1' ? 'Del' : 'From'} --/--/---- ${language === '1' ? 'hasta el' : 'Until'} --/--/----`,
        },
        dias: [],
    })


    const { current, requestDate, mesCuenta, actual, mes, año, dias } = initialState
    const { origin } = requestDate;

    useEffect(() => {
        let boxActual = [];
        let boxAnterior = [];
        let boxDespues = [];

        var diasMes = new Date(año, mes, 0).getDate();
        var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];



        //este es para todos los dias del mes
        for (x = 1; x <= diasMes; x++) {
            let indice = new Date(año, mes - 1, x).getDay();
            let fecha = new Date(año, mes - 1, x);
            boxActual = [...boxActual, {
                "id": x,
                "dia": x,
                "current": x < currenDay && currentMonth == mes - 1 ? false : true,
                "diaName": diasSemana[indice],
                "fecha": fecha,
                "today": String(actual) === String(fecha) ? true : false
            }]
        }

        //Ahora necesitamos sacar en que indice esta el dia numero 1 para sacar de ahí el relleno de atras

        const before = boxActual.find(x => x.id === 1)
        let indice = diasSemana.indexOf(before.diaName)

        /* let indice = 2 */

        //este es para todos los dias del mes anterior

        var diasAnterior = new Date(año, mes - 1, 0).getDate();
        for (x = 0; x <= diasAnterior; x++) {
            let indice = new Date(año, mes - 1, x).getDay();
            let fecha = new Date(año, mes - 2, x);
            boxAnterior = [...boxAnterior, {
                "id": x,
                "dia": x,
                "current": false,
                "diaName": diasSemana[indice],
                "fecha": fecha
            }]
        }


        //este es para todos los dias del mes siguiente
        var diasSiguiente = new Date(año, mes + 1, 0).getDate();
        for (x = 1; x <= diasSiguiente; x++) {
            let indice = new Date(año, mes - 1, x).getDay();
            let fecha = new Date(año, mes, x);
            boxDespues = [...boxDespues, {
                "id": x,
                "dia": x,
                "current": false,
                "diaName": diasSemana[indice],
                "fecha": fecha
            }]
        }

        let anteriores = boxAnterior.filter(x => x.id >= (boxAnterior.length - indice))

        boxActual = [...anteriores, ...boxActual]
        let diferencia = 42 - boxActual.length;
        let siguientes = boxDespues.filter(x => x.id <= diferencia)
        boxActual = [...boxActual, ...siguientes]
        const constante = mesCuenta !== 1 ? 42 : 0;

        boxActual = boxActual.map((x, i, a) => ({ ...x, id: ((constante * mesCuenta) - (mesCuenta !== 1 ? 42 : 0)) + (i + 1) }))

        setInitialState({ ...initialState, dias: boxActual })

    }, [mesCuenta])


    useEffect(() => {
        if (dataFrom.complete != null && dataUntil.complete != null) {
            setDateFrom(dataFrom.complete)
            setDateUntil(dataUntil.complete)
        }
        if (dataFrom.day !== '--') setInitialState({ ...initialState, requestDate: { ...requestDate, origin: `${language === '1' ? 'Del' : 'From'} ${(dataFrom.day < 10 ? ('0' + dataFrom.day) : dataFrom.day) + '/' + (dataFrom.month < 10 ? ('0' + dataFrom.month) : dataFrom.month) + '/' + dataFrom.year} ${language === '1' ? 'hasta el' : 'Until'} ${(dataUntil.day < 10 ? ('0' + dataUntil.day) : dataUntil.day) + '/' + (dataUntil.month < 10 ? ('0' + dataUntil.month) : dataUntil.month) + '/' + dataUntil.year}` } })
    }, [from, until])

    const Mes = ({ day }) => {

        return (
            <View
                style={{ flex: 1, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: ENV.DISPOSITIVO.isIphone ? 15.5 : 14.5, fontWeight: 'bold', color: '#adadad' }}>{day}</Text>
            </View>
        )
    }

    const handlePress = (id, dia) => {
        let complete = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`

        // Verifica si la fecha es anterior a la fecha actual
        const fechaSeleccionada = new Date(año, mes - 1, dia);
        if (fechaSeleccionada < actual) {
            return; // Si es anterior, no hace nada
        }

        if (from && until) {
            if (id < from) setRange({ ...range, from: id, dataFrom: { ...dataFrom, day: dia, month: mes, year: año, initial: new Date(año, mes - 1, dia), complete: complete } })
            else if (id > until) setRange({ ...range, until: id, dataUntil: { ...dataUntil, day: dia, month: mes, year: año, ending: new Date(año, mes - 1, dia), complete: complete } })
            else if (id >= from && id <= until) setRange({ ...range, from: id, until: id, dataFrom: { ...dataFrom, day: dia, month: mes, year: año, initial: new Date(año, mes - 1, dia), complete: complete }, dataUntil: { ...dataUntil, day: dia, month: mes, year: año, ending: new Date(año, mes - 1, dia), complete: complete } })
        } else {
            setRange({ ...range, from: id, until: id, dataFrom: { ...dataFrom, day: dia, month: mes, year: año, initial: new Date(año, mes - 1, dia), complete: complete }, dataUntil: { ...dataUntil, day: dia, month: mes, year: año, ending: new Date(año, mes - 1, dia), complete: complete } })
        }
    }

    const handleChangeMonth = useCallback((type) => {
        let finMes = type === '+' ? mes === 12 ? 1 : (mes + 1) : mes === 1 ? 12 : (mes - 1)
        let finAño = type === '+' ? finMes === 1 ? (parseInt(año) + 1) : año : finMes === 12 ? (parseInt(año) - 1) : año
        let completita = `${finAño}-${finMes < 10 ? `0${finMes}` : finMes}`
        setInitialState({ ...initialState, mes: finMes, año: finAño, complete: completita, current: type === '+' ? (current + 1) : (current - 1), mesCuenta: type === '+' ? (mesCuenta + 1) : (mesCuenta - 1) })
    })

    const handleSelectedDate = () => {
        toggleModal();
    }

    return (
        <>
            <View style={[tw`h-auto self-stretch justify-center items-center border-[#eaeaea] overflow-hidden`, { borderWidth: 1.8, borderRadius: 10 }]}>
                <View style={[tw`h-10 w-[100%] flex-row bg-white border-b border-b-[#eaeaea]`, { borderBottomWidth: 1.8, borderTopStartRadius: 2, borderTopEndRadius: 2 }]}>

                    <TouchableOpacity disabled={mesCuenta > 1 ? false : true} style={tw`w-12.5 h-[100%] justify-center items-center`} onPress={() => handleChangeMonth('-')}>
                        <IonIcons name={'chevron-left'} size={18} color={mesCuenta > 1 ? theme.colors.green : '#dadada'} />
                    </TouchableOpacity>

                    <View style={tw`flex-1 flex-row justify-center items-center`}>
                        <View style={tw`h-[100%] w-auto pl-1.5 pr-1.5 justify-center items-center`}>
                            <Text style={[tw`text-sm text-[${theme.colors.primary}] font-bold`, { fontSize: 14 }]}>{mes === 1 ? language === '1' ? 'Enero' : 'January' : mes === 2 ? language === '1' ? 'Febrero' : 'February' : mes === 3 ? language === '1' ? 'Marzo' : 'March' : mes === 4 ? language === '1' ? 'Abril' : 'April' : mes === 5 ? language === '1' ? 'Mayo' : 'May' : mes === 6 ? language === '1' ? 'Junio' : 'June' : mes === 7 ? language === '1' ? 'Julio' : 'July' : mes === 8 ? language === '1' ? 'Agosto' : 'August' : mes === 9 ? language === '1' ? 'Septiembre' : 'September' : mes === 10 ? language === '1' ? 'Octubre' : 'October' : mes === 11 ? language === '1' ? 'Noviembre' : 'November' : language === '1' ? 'Diciembre' : 'December'}</Text>
                        </View>
                        <View style={tw`h-[100%] w-auto mx-0.5 justify-center items-center`}>
                            <IonIcons name={'circle-slice-8'} size={6} color={theme.colors.primary} />
                        </View>
                        <View style={tw`h-[100%] w-auto pl-1.5 justify-center items-center`}>
                            <Text style={[tw`text-sm text-[${theme.colors.primary}] font-bold`, { fontSize: 14 }]}>{`${año}`}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={tw`w-12.5 h-[100%] justify-center items-center`} onPress={() => handleChangeMonth('+')}>
                        <IonIcons name={'chevron-right'} size={18} color={theme.colors.green} />
                    </TouchableOpacity>

                </View>

                <View style={[tw`flex-row bg-[#fff] w-[100%] border-b border-b-[#eaeaea] bg-[#fff]`, { borderBottomWidth: 1.8 }]}>
                    <Mes day={language === '1' ? 'D' : 'S'} />
                    <Mes day={language === '1' ? 'L' : 'M'} />
                    <Mes day={language === '1' ? 'M' : 'T'} />
                    <Mes day={language === '1' ? 'M' : 'W'} />
                    <Mes day={language === '1' ? 'J' : 'T'} />
                    <Mes day={language === '1' ? 'V' : 'F'} />
                    <Mes day={language === '1' ? 'S' : 'S'} />
                </View>

                <View style={[tw`h-auto w-[100%] bg-white`, { borderBottomStartRadius: 2, borderBottomEndRadius: 2 }]}>
                    <FlatList
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={tw`h-auto self-stretch bg-white`}
                        data={dias}
                        numColumns={7}
                        renderItem={({ item }) =>
                            item.current
                                ?
                                <TouchableOpacity style={tw`flex-1 h-11.5 justify-center items-center`} onPress={() => handlePress(item.id, item.dia)}>
                                    <View style={tw`w-[100%] h-[85%] justify-center items-center ${item.id === from ? 'rounded-l' : 'rounded-none'} ${item.id === until ? 'rounded-r' : 'rounded-none'} bg-[${(((item.fecha >= dataFrom.initial) && (item.fecha <= dataUntil.ending))) ? (item.id === from || item.id === until) ? theme.colors.green : 'rgba(50,131,197,.1)' : '#fff'}]`}>
                                        <View style={[tw`w-[100%] h-9 justify-center items-center`]}>
                                            <View style={[tw`w-7 h-7 justify-center items-center rounded-3xl ios:pl-px`]}>
                                                <Text style={[tw`text-[${(((item.fecha >= dataFrom.initial) && (item.fecha <= dataUntil.ending)) || (item.id === from || item.id === until) || item.today) ? (item.id === from || item.id === until) ? '#fff' : theme.colors.green : '#383838'}] text-xs font-${(((item.fecha >= dataFrom.initial) && (item.fecha <= dataUntil.ending)) || (item.id === from || item.id === until) || item.today) ? 'bold' : 'normal'}`, { fontSize: 12 }]}>{item.dia}</Text>
                                                {
                                                    item.today
                                                    &&
                                                    <View style={{ height: 5, width: 5, borderRadius: 5, backgroundColor: item.today ? ((item.id === from) || (item.id === until)) ? '#fff' : theme.colors.green : 'transparent', position: 'absolute', bottom: 1 }} />
                                                }
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                :
                                <View style={tw`flex-1 h-11.5 justify-center items-center`}>
                                    <View style={tw`w-[100%] h-[85%] justify-center items-center bg-[${((item.fecha >= dataFrom.initial) && (item.fecha <= dataUntil.ending)) ? 'rgba(50,131,197,.1)' : '#fff'}]`}>
                                        <View style={[tw`w-[100%] h-9 justify-center items-center`]}>
                                            <View style={[{ borderWidth: item.today ? 1.5 : 0 }, tw`w-7 h-7 justify-center items-center rounded-3xl ios:pl-px`]}>
                                                <Text style={[tw`text-[#adadad] text-xs font-${((((item.fecha >= dataFrom.initial) && (item.fecha <= dataUntil.ending) || item.today)) ? 'bold' : 'normal')}`, { fontSize: 12 }]}>{item.dia}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                        }
                        keyExtractor={item => String(item.id)}
                    />
                </View>
            </View>

            <View style={tw`h-auto self-stretch mt-2.5`}>
                <TextInput
                    editable={false}
                    style={{ height: 45, alignSelf: 'stretch', backgroundColor: '#fff', fontSize: 14, color: theme.colors.primary, fontWeight: 'normal', borderWidth: 1, borderColor: '#eaeaea', textAlign: 'center' }}
                    value={origin}
                />
            </View>

            <View>

                <StyledGradientButton
                    text={"Confirm"}
                    action={() => toggleModal()}
                />
            </View>
        </>
    )
}