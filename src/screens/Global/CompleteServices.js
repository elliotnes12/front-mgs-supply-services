import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from "react";
import { Image, Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { Service } from "../../api/service";
import { Header } from "../../components/core/Header";
import { LoadingScreen } from "../../components/core/LoadingScreen";
import { Alert } from "../../components/core/Modal/Alert";
import { useAuth } from "../../modules/Auth/hooks";
import { screens } from "../../utils";
import StyledText, { StyledGradientButton } from "../../utils/globalstyle";
import { getIconById } from "../../utils/util";
import { styles } from "./styles/CompleteService.style";

export function CompleteService() {
    const route = useRoute();
    const { serviceId } = route.params;
    const controllerService = new Service();
    const { accessToken, user: { email }, userInfo } = useAuth();
    const navigation = useNavigation();
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true);
    const [photos, setPhotos] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalAlert, setIsModalAlert] = useState(false)

    const [message, setMessage] = useState("");

    useEffect(() => {

        (async () => {
            try {
                setLoading(true)
                const response = await controllerService.findById(accessToken, serviceId);
                if (response.meta.code !== 200) {
                    throw new Error();
                }
                setService(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading((prevState) => !prevState);
            }
        })();
    }, [serviceId]);

    const capitalizarPrimeraLetra = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const toggleModal = () => {
        setIsModalAlert((prevState) => !prevState);
    };


    const openCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera permissions to make this work!');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            const selectedPhotos = result.assets.map(asset => asset.uri);
            setPhotos(prevPhotos => [...prevPhotos, ...selectedPhotos]);
            setIsModalVisible(true);
        }
    };

    const openGallery = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });


        if (!result.canceled) {
            const selectedPhotos = result.assets.map(asset => asset.uri);
            setPhotos(prevPhotos => [...prevPhotos, ...selectedPhotos]);
            setIsModalVisible(true);
        }
    };

    const completeService = async () => {

        setIsModalAlert(true)
        setLoading(true)

        const formData = new FormData();
        photos.forEach((photoUri, index) => {
            let fileName = photoUri.split('/').pop();
            let fileType = fileName.split('.').pop();
            formData.append('images', {
                uri: photoUri,
                name: fileName,
                type: `image/${fileType}`,
            });
        });

        formData.append("id", serviceId);
        formData.append("status", "completed");

        try {
            const { meta } = await controllerService.completeService(accessToken, formData);

            if (meta.code != 200) {
                throw new Error();
            }


            navigation.navigate(screens.tab.pedings.pendingScreenEmployee, {});
            setIsModalAlert(false)
        } catch (error) {
            setMessage("please try again later")
        }
        finally {
            setLoading(false)
        }
    };

    if (loading) {
        return (
            <LoadingScreen />
        );
    }

    return (
        <ScrollView style={[styles.background, { marginBottom: 60 }]}>
            <Header
                goBack={true}
                title={"Complete Service"}
                subtitle={"Complete of the generated service"}
            />
            <View style={{ paddingHorizontal: 30, paddingVertical: 30 }}>
                <StyledText paraStyles={{ marginBottom: 20 }} font17pt boldGray>
                    Service: {capitalizarPrimeraLetra(service.category)}
                </StyledText>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                    <View style={{ width: 30, height: 30, marginRight: 10 }}>
                        {getIconById("iconCalendarBlack")}
                    </View>
                    <StyledText>Date: {service.formattedFrom}</StyledText>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                    <View style={{ width: 30, height: 30, marginRight: 10 }}>
                        {getIconById("iconTimeBlack")}
                    </View>
                    <StyledText>Hour: {service.formattedTime}</StyledText>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                    <View style={{ width: 30, height: 30, marginRight: 10 }}>
                        {getIconById("iconUserBlack")}
                    </View>
                    <StyledText>Assigned: {service.supervisor.name + " " + service.supervisor.lastName}</StyledText>
                </View>

                <StyledText paraStyles={{ marginBottom: 20, marginTop: 10 }} font17pt boldGray>
                    Service Location
                </StyledText>

                <StyledText paraStyles={{ paddingHorizontal: 20 }}>
                    {service.address}
                </StyledText>

                <StyledText paraStyles={{ marginBottom: 20, marginTop: 30 }} font17pt boldGray>
                    Business Details
                </StyledText>

                {service?.customer?.businessName != "" && (
                    <>
                        <StyledText paraStyles={{ marginBottom: 10 }} regularGray>
                            Business Name
                        </StyledText>

                        <StyledText paraStyles={{ backgroundColor: "#F2F2F2", padding: 10 }} regularGray>
                            {service.customer.businessName}
                        </StyledText>
                    </>
                )}

                <StyledText paraStyles={{ marginTop: 15 }} regularGray>
                    Email
                </StyledText>

                <StyledText regularGray>
                    {email}
                </StyledText>

                <StyledText paraStyles={{ marginTop: 20 }} regularGray>
                    Additional Message
                </StyledText>

                <StyledText paraStyles={{ paddingHorizontal: 20, marginTop: 20 }} regularGray>
                    {service.comments}
                </StyledText>

                <StyledText paraStyles={{ marginTop: 20 }} font17pt bold>
                    Upload Evidence
                </StyledText>

                <View style={{ alignItems: "center", marginTop: 40 }}>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.btnPreviewImages}>
                        <View style={{ width: 25, height: 25, marginRight: 10 }}>
                            {getIconById("iconPreviewImages")}
                        </View>
                        <StyledText regularWhite>Upload Evidences</StyledText>
                    </TouchableOpacity>
                </View>


                <StyledGradientButton text={"Complete Service"} disabled={photos.length === 0} action={() => completeService()} />


                <Modal
                    visible={isModalVisible}
                    transparent={false}
                    animationType="slide"
                >
                    <View style={styles.modalContent}>
                        <View style={{ flexDirection: "row", padding: 20, }}>
                            <StyledText paraStyles={{ marginBottom: 20, flex: 2 }} font20pt boldGray>
                                Gallery
                            </StyledText>

                            <TouchableOpacity
                                onPress={() => setIsModalVisible(false)}
                                style={styles.iconClose}
                            >
                                {getIconById("iconClose")}
                            </TouchableOpacity>

                        </View>
                        <ScrollView
                            horizontal={false}
                            style={styles.modalImages}
                            contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', flexWrap: "wrap", justifyContent: "center" }} // Alinea las imágenes en columna
                        >
                            {photos.map((photoUri, index) => (
                                <Image
                                    key={index}
                                    source={{ uri: photoUri }}
                                    style={{ width: 100, height: 100, margin: 5 }}
                                />
                            ))}
                        </ScrollView>

                        <View style={styles.modalBottom}>
                            <View style={[styles.modalBottomItem, { marginRight: 80 }]}>
                                <TouchableOpacity
                                    onPress={() => openGallery()}
                                    style={styles.iconGallery}
                                >
                                    {getIconById("iconGallery")}
                                </TouchableOpacity>
                                <StyledText regularGreen>Gallery</StyledText>
                            </View>

                            <View style={styles.modalBottomItem}>
                                <TouchableOpacity
                                    onPress={() => openCamera()}
                                    style={styles.iconGallery}
                                >
                                    {getIconById("iconCamaraGray")}
                                </TouchableOpacity>
                                <StyledText paraStyles={{ color: "#ABABAB" }} regularGray>Camera</StyledText>
                            </View>
                        </View>

                    </View>
                </Modal>
            </View>

            <Alert
                show={isModalAlert}
                type={"info"}
                loading={loading}
                onClose={toggleModal}
                textConfirm="OK"
                onConfirm={() => setIsModalAlert(false)}
                message={message}
                isDanger={loading ? false : true}
            />
        </ScrollView>
    );
}
