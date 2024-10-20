import React, { useEffect, useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { styles } from "./styles/DetailService.style";
import { useRoute } from '@react-navigation/native';
import { Header } from "../../components/core/Header";
import { Service } from "../../api/service";
import { useAuth } from "../../modules/Auth/hooks";
import StyledText from "../../utils/globalstyle";
import { getIconById } from "../../utils/util";
import { ImagePreviewModal } from "../../components/core/Modal/ImagePreviewModal";
import { LoadingScreen } from "../../components/core/LoadingScreen";

export function DetailService() {

    const route = useRoute();
    const { serviceId } = route.params;
    const controllerService = new Service();
    const { accessToken, user: { role, active, businessType }, userInfo } = useAuth();
    const [isModalVisible, setModalVisible] = useState(false);
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true);

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
                setService({})
            } finally {
                setLoading(false);
            }
        })();
    }, [serviceId]);

    const closeModal = () => setModalVisible(false);

    const capitalizarPrimeraLetra = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    if (loading) {
        return <LoadingScreen />
    }

    return (
        <ScrollView style={styles.background}>
            <Header
                goBack={true}
                title={"Detail Service"}
                subtitle={"Detail of the generated service"}
            />
            <View style={{ paddingHorizontal: 30, paddingTop: 30, paddingBottom: 90 }}>


                <StyledText paraStyles={{ marginBottom: 20 }} font17pt boldGray>
                    Service: {capitalizarPrimeraLetra(service.category)}
                </StyledText>

                <StyledText paraStyles={{ marginBottom: 20 }} boldGray >Ticket: {service?.ticket}</StyledText>

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
                    <StyledText>Hour: {service.hour}</StyledText>
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
                    Bussiness Details
                </StyledText>

                {service?.customer?.businessName != "" &&

                    <>
                        <StyledText paraStyles={{ marginBottom: 10 }} regularGray>
                            Bussiness Name
                        </StyledText>

                        <StyledText paraStyles={{ backgroundColor: "#F2F2F2", padding: 10 }} regularGray>
                            {service.customer.businessName}
                        </StyledText>
                    </>
                }


                <StyledText paraStyles={{ marginTop: 15 }} regularGray>
                    Email
                </StyledText>

                <StyledText paraStyles={{ backgroundColor: "#F2F2F2", padding: 10 }} regularGray>
                    {service.customer?.user?.email}
                </StyledText>


                <StyledText paraStyles={{ marginTop: 20 }} regularGray>
                    Additional Message
                </StyledText>

                <StyledText paraStyles={{ paddingHorizontal: 20, marginTop: 20, backgroundColor: "#F2F2F2", padding: 10 }} regularGray>
                    {service.comments}
                </StyledText>


                {service.status === 'completed' && (

                    <View style={{ alignItems: "center", marginTop: 40 }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.btnPreviewImages}>
                            <View style={{ width: 25, height: 25, marginRight: 10 }}>
                                {getIconById("iconPreviewImages")}
                            </View>
                            <StyledText regularWhite>Preview Images</StyledText>
                        </TouchableOpacity>
                    </View>
                )}

                <ImagePreviewModal
                    visible={isModalVisible}
                    photos={service.photos}
                    onClose={closeModal}
                />


            </View>
        </ScrollView>
    );
}
