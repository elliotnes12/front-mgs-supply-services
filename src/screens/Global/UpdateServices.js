import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Header } from "../../components/core/Header";
import { Alert } from "../../components/core/Modal/Alert";
import { CustomerSelectorModal } from "../../components/core/Modal/CustomerSelectorModal";
import EmployeeSelectorModal from "../../components/core/Modal/EmployeeSelectorModal";
import { MapModal } from "../../components/core/Modal/MapModal";
import SupervisorSelectorModal from "../../components/core/Modal/SupervisorSelectorModal";
import CalendarRange from "../../components/DatePicker";
import StyledText, { StyledGradientButtonSmall } from "../../utils/globalstyle";
import { theme } from "../../utils/theme";
import { getIconById } from "../../utils/util";
import { useCreateServiceMethods } from "./UpdateServiceMethods";
import { styles } from "./styles/CreateService.style";
import { useRoute } from "@react-navigation/native";
import { Service } from "../../api/service";
import { useAuth } from "../../modules/Auth/hooks";
import { LoadingScreen } from "../../components/core/LoadingScreen";

export function UpdateService() {
    const {
        bussinessName,
        setBussinessName,
        dateFrom,
        dateUntil,
        bussinessAdditional,
        setBussinessAdditional,
        selectedAddress,
        setSelectedAddress,
        isModalVisible,
        isModalCalendarVisible,
        isModalEmployeeVisible,
        isModalCustomerVisible,
        isModalTimeVisible,
        setIsModalTimeVisible,
        selectedButton,
        assignedEmployees,
        assignedSupervisores,
        timeOptions,
        assingedCustomer,
        handleOpenModal,
        handleCloseModal,
        handleConfirmSelection,
        toggleModal,
        toggleModalCustomer,
        toggleModalCalendar,
        handleButtonPress,
        unAssingEmployee,
        assignedSupervisor,
        setAssignedSupervisor,
        setDateFrom,
        setDateUntil,
        setIsModalCustomerVisible,
        setIsModalSupervisorVisible,
        isModalSupervisorVisible,
        closeModalCustomer,
        onTimeChange,
        setIsModalVisible,
        time,
        setTime,
        setCurrentTime,
        currentTime,
        createService,
        userInfo,
        accessToken,
        message,
        loading,
        setLoading,
        isModalService,
        setIsModalService,
        toggleModalSevice,
        setService
    } = useCreateServiceMethods();


    const route = useRoute();
    const { serviceId } = route.params;
    const controllerService = new Service();
    const [loadingService, setLoadingService] = useState(false)

    useEffect(() => {

        (async () => {
            try {
                setLoadingService(true)
                const response = await controllerService.findById(accessToken, serviceId);
                if (response.meta.code !== 200) {
                    throw new Error();
                }
                setLoadingService(response.data);
                console.log("entro")
                setService(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingService(false);
            }
        })();
    }, [serviceId]);


    useEffect(() => {
        console.log(serviceId)
        setAssignedSupervisor(userInfo)
    }, [])

    return (
        <>
            {!loadingService &&
                <>
                    <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                        <Header
                            title={"Update Service"}
                            subtitle={"Schedule a service with us"}
                            goBack={true}
                        />

                        <View style={{ paddingTop: 20, paddingHorizontal: 24 }}>
                            <View style={{ marginVertical: 15 }}>
                                <StyledText font17pt neutralGray bold>
                                    Select a service
                                </StyledText>
                            </View>

                            <View style={styles.categories}>
                                <StyledGradientButtonSmall
                                    action={() => handleButtonPress("cleaning")}
                                    focused={selectedButton === "cleaning"}
                                    icon={"iconBroom"}
                                    text={"Cleaning"}
                                />

                                <StyledGradientButtonSmall
                                    action={() => handleButtonPress("painting")}
                                    focused={selectedButton === "painting"}
                                    icon={"iconPainting"}
                                    text={"Painting"}
                                />

                                <StyledGradientButtonSmall
                                    action={() => handleButtonPress("polishing")}
                                    focused={selectedButton === "polishing"}
                                    icon={"iconPolishing"}
                                    text={"Polishing"}
                                />
                            </View>

                            <View style={{ marginVertical: 15 }}>
                                <StyledText font17pt neutralGray bold>
                                    Set date & time
                                </StyledText>
                            </View>

                            {timeOptions.map((item) => (
                                <TouchableOpacity
                                    onPress={item.callback}
                                    key={item.id}
                                    style={[
                                        {
                                            backgroundColor: theme.colors.lightGray,
                                            marginBottom: 10,
                                            borderRadius: 10,
                                        },
                                    ]}
                                >
                                    <View style={[styles.item, { paddingLeft: 15 }]}>
                                        <View style={{ width: 30, height: 30, marginRight: 10 }}>
                                            {getIconById(item.icon)}
                                        </View>
                                        <StyledText graySilver font14pt regular>
                                            {item.label}
                                        </StyledText>
                                    </View>
                                </TouchableOpacity>
                            ))}

                            <View style={{ marginVertical: 15 }}>
                                <StyledText font17pt neutralGray bold>
                                    Employees
                                </StyledText>
                            </View>



                            <View>
                                {assignedEmployees?.length > 0 &&
                                    assignedEmployees.map((item) => (
                                        <View
                                            key={item.idEmployee}
                                            style={[
                                                {
                                                    backgroundColor: theme.colors.lightGray,
                                                    marginBottom: 10,
                                                    borderRadius: 10,
                                                },
                                            ]}
                                        >
                                            <View style={[styles.item, { paddingLeft: 15 }]}>
                                                <View style={[styles.item, { flex: 2 }]}>
                                                    <View style={styles.avatarAssingEmployee}>
                                                        {getIconById("iconAvatar")}
                                                    </View>

                                                    <StyledText graySilver font16pt>
                                                        {item.name} - {item.idEmployee}
                                                    </StyledText>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => unAssingEmployee(item.idEmployee)}
                                                    style={styles.iconClose}
                                                >
                                                    {getIconById("iconClose")}
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))}
                                {assignedEmployees?.length == 0 && (
                                    <View
                                        style={[
                                            {
                                                backgroundColor: theme.colors.lightGray,
                                                marginBottom: 10,
                                                borderRadius: 10,
                                                paddingVertical: 15,
                                            },
                                        ]}
                                    >
                                        <View style={[{ paddingLeft: 15 }]}>
                                            <StyledText graySilver font14pt regular>
                                                No Employees Assigned
                                            </StyledText>
                                        </View>
                                    </View>
                                )}
                            </View>

                            <View style={{ marginTop: 15 }}>
                                <StyledText font17pt neutralGray bold>
                                    Assigned Supervisor
                                </StyledText>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <StyledText paraStyles={{ flex: 2 }} graySilver font14pt regular>
                                    {assignedSupervisor?.name} {assignedSupervisor?.lastName}
                                </StyledText>

                                {userInfo.type == "manager" &&
                                    <TouchableOpacity onPress={() => setIsModalSupervisorVisible(true)}
                                        style={{ alignItems: "center" }}>
                                        <View style={{ width: 30, height: 30 }}>
                                            {getIconById("iconAvatar")}
                                        </View>
                                        <StyledText regularGreen>Other</StyledText>
                                    </TouchableOpacity>
                                }
                            </View>

                            <View style={{ marginVertical: 15 }}>
                                <StyledText font17pt neutralGray bold>
                                    Service Location
                                </StyledText>
                            </View>

                            <View
                                style={[
                                    {
                                        backgroundColor: theme.colors.lightGray,
                                        marginBottom: 10,
                                        borderRadius: 10,
                                        paddingVertical: 15,
                                    },
                                ]}
                            >
                                <View style={[{ paddingLeft: 15, minHeight: 70 }, styles.item]}>
                                    <View style={{ flex: 3, paddingVertical: 15 }}>
                                        <StyledText graySilver font16pt>
                                            {selectedAddress}
                                        </StyledText>
                                    </View>
                                    <TouchableOpacity onPress={toggleModal}>
                                        <Text style={styles.street__googleMaps}>SET GOOGLE MAP</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.bussiness}>
                                <StyledText font17pt bold>
                                    Bussiness Details
                                </StyledText>

                                <TouchableOpacity
                                    onPress={() => setIsModalCustomerVisible(true)}
                                    style={[
                                        {
                                            backgroundColor: theme.colors.lightGray,
                                            marginBottom: 10,
                                            borderRadius: 10,
                                        },
                                    ]}
                                >
                                    <View style={[styles.item, { paddingLeft: 15 }]}>
                                        <View style={{ width: 30, height: 30, marginRight: 10, zIndex: 10 }}>
                                            {getIconById("iconlupa")}
                                        </View>
                                        <StyledText graySilver font14pt regular>
                                            Assing Customer
                                        </StyledText>
                                    </View>
                                </TouchableOpacity>


                                <StyledText gray regular font16pt>Name</StyledText>
                                <View style={{ backgroundColor: theme.colors.gray6, padding: 15, borderRadius: 5 }}>
                                    <StyledText regularGray>{assingedCustomer?.name}</StyledText>
                                </View>

                                <StyledText gray regular font16pt>Email</StyledText>
                                <View style={{ backgroundColor: theme.colors.gray6, padding: 15, marginBottom: 25, borderRadius: 5 }}>
                                    <StyledText regularGray>{assingedCustomer?.user?.email}</StyledText>
                                </View>

                                {assingedCustomer?.bussinessName &&

                                    <>
                                        <StyledText gray font16pt bold>businessName</StyledText>
                                        <View style={{ backgroundColor: theme.colors.gray6, padding: 15, marginBottom: 25, borderRadius: 5 }}>
                                            <StyledText regularGray>{assingedCustomer?.bussinessName}</StyledText>
                                        </View>
                                    </>

                                }
                                <StyledText gray regular> Additional Message</StyledText>
                                <TextInput
                                    style={styles.textArea}
                                    multiline={true}
                                    value={bussinessAdditional}
                                    numberOfLines={4}
                                    onChangeText={(text) => setBussinessAdditional(text)}
                                    placeholder="Enter your text here"
                                />
                            </View>
                            <View style={styles.submit}>
                                <TouchableOpacity onPress={() => createService()}>
                                    <LinearGradient
                                        colors={["#CEDC39", "#7DA74D"]}
                                        style={styles.button}
                                    >
                                        <Text style={styles.button__text}>Update Service</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                            <CustomerSelectorModal
                                isVisible={isModalCustomerVisible}
                                onClose={closeModalCustomer}
                            />


                            <Modal animationType="slide" isVisible={isModalCalendarVisible}>
                                <View style={{ flex: 1, justifyContent: "center" }}>
                                    <CalendarRange
                                        setDateFrom={setDateFrom}
                                        setDateUntil={setDateUntil}
                                        toggleModal={toggleModalCalendar} />
                                </View>
                            </Modal>

                            <EmployeeSelectorModal
                                isVisible={isModalEmployeeVisible}
                                onClose={handleCloseModal}
                                onConfirm={handleConfirmSelection}
                                assignedEmployees={assignedEmployees}
                            />


                            <SupervisorSelectorModal
                                isVisible={isModalSupervisorVisible}
                                onClose={() => setIsModalSupervisorVisible(false)}
                                onConfirm={(supervisor) => { setAssignedSupervisor(supervisor) }}
                                assignedEmployees={assignedSupervisores}
                            />



                            <MapModal
                                setSelectedAddress={setSelectedAddress}
                                isVisible={isModalVisible}
                                toggleModal={toggleModal}
                            />

                            {isModalTimeVisible && (
                                <DateTimePicker
                                    value={time}
                                    mode="time"
                                    is24Hour={true}
                                    display="default"
                                    onChange={onTimeChange}
                                />
                            )}

                            <Alert
                                show={isModalService}
                                type={"info"}
                                loading={loading}
                                onClose={toggleModalSevice}
                                textConfirm="OK"
                                onConfirm={() => setIsModalService(false)}
                                message={message}
                                isDanger={loading ? false : true}
                            />
                        </View>
                    </ScrollView>
                </>
            }
            {loadingService &&
                <LoadingScreen />
            }
        </>
    );
}
