import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { User } from '../../api/user';
import { useAuth } from '../../modules/Auth/hooks';
import { LoadingScreen } from '../../components/core/LoadingScreen';
import { Header } from '../../components/core/Header';
import { headers } from '../../utils';
import { stylesGlobal } from '../../modules/styles/global.style';
import { assets } from '../../assets';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles/ChatContactsScreenEmployee.style";

export function ChatContactsScreenEmployee() {
    const { accessToken } = useAuth();
    const userController = new User();
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    setLoading(true);
                    const response = await userController.getAll(accessToken);
                    setUsers(response.data);
                    console.log(response);
                } catch (e) {
                    console.error(e);
                } finally {
                    setLoading(false);
                }
            })();
        }, [accessToken])
    );

    const ItemUser = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            {item?.image ? (
                <View style={styles.chatItem__img}>
                    <Image alt="icon-profile" style={stylesGlobal.imageMin__img} resizeMode="contain" source={assets.image.png.profile} />
                </View>
            ) : (
                <View style={styles.chatItem__snImg}>
                    <Text style={{ color: "#fff", fontSize: 16 }}>{item?.name?.substring(0, 2).toUpperCase()}</Text>
                </View>
            )}
            <View style={[styles.chatTextContainer]}>
                <Text style={styles.chatItem__name}>{item.name}</Text>
                <Text style={styles.chatItem__type}>{item.type}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            {loading && <LoadingScreen />}
            {!loading && (
                <>
                    <Header totalContacts={users.length} headerType={headers.HEADER_CONTACT} goBack={true} title={"Contacts"} />
                    <FlatList
                        style={{ flex: 1, backgroundColor: "#fff" }}
                        data={users}
                        renderItem={({ item }) => <ItemUser item={item} />}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 20 }}
                        ListHeaderComponent={
                            <>
                                <TouchableOpacity style={stylesGlobal.itemHorizontal}>
                                    <LinearGradient style={styles.iconCreateGroup} colors={['#CEDC39', '#7DA74D']}>
                                        <Image alt="icon-createGroup" resizeMode='contain'
                                            source={assets.image.png.iconCreateGroup}
                                            style={stylesGlobal.imageMin__img} />
                                    </LinearGradient>
                                    <Text style={styles.titleGroup}>Create a new group</Text>
                                </TouchableOpacity>
                                <Text style={styles.titleContacts}>{`Contacts at MGS Supply & Services`}</Text>
                            </>
                        }
                    />
                </>
            )}
        </View>
    );
}
