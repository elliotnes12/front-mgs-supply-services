import { useState } from "react";
import { ServiceOrder } from "../../modules/chat/api/serviceOrder";
import { useAuth } from "../../modules/Auth/hooks";

export const useCreateServiceMethods = () => {


    const apiService = new ServiceOrder();
    const { accessToken, user, userInfo } = useAuth();

    const [selectedButton, setSelectedButton] = useState("cleaning");
    const [dateFrom, setDateFrom] = useState(null);
    const [dateUntil, setDateUntil] = useState(null);
    const [currentTime, setCurrentTime] = useState("")
    const [assignedEmployees, setAssignedEmployees] = useState([]);
    const [assignedIdsEmployees, setAssignedIdsEmployees] = useState([]);
    const [assignedSupervisores, setAssignedSupervisores] = useState([]);
    const [assignedIdsSupervisores, setAssignedIdsSupervisores] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState("");
    const [bussinessName, setBussinessName] = useState("");
    const [bussinessAdditional, setBussinessAdditional] = useState("");
    const [assingedCustomer, setAssignedCustomer] = useState(undefined)
    const [assignedSupervisor, setAssignedSupervisor] = useState(undefined)


    const [mapClicked, setMapClicked] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalCalendarVisible, setIsModalCalendar] = useState(false);
    const [isModalEmployeeVisible, setModalEmployeeVisible] = useState(false);
    const [isModalCustomerVisible, setIsModalCustomerVisible] = useState(false);
    const [isModalSupervisorVisible, setIsModalSupervisorVisible] = useState(false);
    const [isModalTimeVisible, setIsModalTimeVisible] = useState(false);
    const [isModalService, setIsModalService] = useState(false)
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("")

    const [time, setTime] = useState(new Date());
    const timeOptions = [
        {
            id: "1",
            icon: "iconCalendar",
            label: dateFrom != null && dateUntil ? dateFrom + "-" + dateUntil : "Choose a Date",
            callback: () => {
                setIsModalTimeVisible(false);
                setModalEmployeeVisible(false);
                setIsModalCalendar(true);
            },
        },
        {
            id: "2",
            icon: "icontime",
            label: currentTime !== "" ? currentTime : "Choose a Time",
            callback: () => {
                setIsModalCalendar(false);
                setModalEmployeeVisible(false);
                setIsModalTimeVisible(true);
            },
        },
        {
            id: "3",
            icon: "iconlupa",
            label: "Assign Employee",
            callback: () => {
                setIsModalCalendar(false);
                setIsModalTimeVisible(false);
                setModalEmployeeVisible(true);
            },
        },
    ];



    const handleCloseModal = () => {
        setModalEmployeeVisible(false);
    };

    const handleConfirmSelection = (selected) => {
        setAssignedEmployees(selected);
        const ids = selected.map((element) => {
            return element._id;
        })
        setAssignedIdsEmployees(ids)
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
        if (isModalVisible) {
            setMapClicked(false);
        }
    };

    const toggleModalCustomer = () => {
        setIsModalCustomerVisible(false);
    };

    const toggleModalCalendar = () => {
        setIsModalCalendar(false);
    };

    const toggleModalTime = () => {
        setIsModalTimeVisible(false);
    }

    const toggleModalSevice = () => {
        setIsModalService((prevStatus) => !prevStatus);
    }


    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const closeModalCustomer = (customer) => {
        toggleModalCustomer();
        setAssignedCustomer(customer)
    }

    const unAssingEmployee = (id) => {
        const tempAssignedEmployees = assignedEmployees.filter(
            (element) => element.idEmployee !== id
        );
        setAssignedEmployees(tempAssignedEmployees);

        const ids = tempAssignedEmployees.map((element) => {
            return element._id;
        })
        setAssignedIdsEmployees(ids)
    };

    const onTimeChange = (event, selectedTime) => {
        if (event.type === "set") {
            let currentTime = selectedTime || time;
            currentTime = new Date(currentTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            setCurrentTime(currentTime)
            toggleModalTime();
        }
    };

    const createService = () => {

        (async () => {

            if (!selectedButton) {
                setMessage("Category is missing");
                setIsModalService(true);
                return;
            }
            if (!dateFrom) {
                setMessage("Start date is missing");
                setIsModalService(true);
                return;
            }
            if (!dateUntil) {
                setMessage("End date is missing");
                setIsModalService(true);
                return;
            }
            if (!currentTime) {
                setMessage("Time is missing");
                setIsModalService(true);
                return;
            }
            if (!assignedIdsEmployees.length) {
                setMessage("At least one employee must be assigned");
                setIsModalService(true);
                return;
            }
            if (!selectedAddress) {
                setMessage("Address is missing");
                setIsModalService(true);
                return;
            }
            if (!assingedCustomer) {
                setMessage("Customer is missing");
                setIsModalService(true);
                return;
            }
            if (!bussinessAdditional) {
                setMessage("Additional business information is missing");
                setIsModalService(true);
                return;
            }

            setIsModalService(true)
            setLoading(true)
            const data = {
                category: selectedButton,
                from: dateFrom,
                until: dateUntil,
                hour: currentTime,
                employees: assignedIdsEmployees,
                address: selectedAddress,
                supervisor: assignedSupervisor._id,
                user: user._id,
                customer: assingedCustomer._id,
                comments: bussinessAdditional,
                rating: ""
            }

            const response = await apiService.create(accessToken, data);
            if (response.meta.code != 201) {
                setMessage("error")
                setLoading(false)
            }
            else if (response.meta.code == 201) {
                setMessage("Service created successfully")
                setLoading(false)
                setDateFrom("")
                setDateUntil("")
                setCurrentTime("")
                setSelectedAddress("")
                setBussinessAdditional("")
                setAssignedIdsEmployees([])
                setAssignedCustomer(undefined)
                setAssignedEmployees([])

            }

        })();
    }

    return {
        bussinessName,
        setBussinessName,
        dateFrom,
        setDateFrom,
        dateUntil,
        setDateUntil,
        bussinessAdditional,
        setBussinessAdditional,
        selectedAddress,
        setSelectedAddress,
        mapClicked,
        setMapClicked,
        isModalVisible,
        setIsModalVisible,
        isModalCalendarVisible,
        setIsModalCalendar,
        isModalEmployeeVisible,
        setModalEmployeeVisible,
        isModalCustomerVisible,
        setIsModalCustomerVisible,
        setIsModalTimeVisible,
        isModalTimeVisible,
        setIsModalSupervisorVisible,
        isModalSupervisorVisible,
        selectedButton,
        setSelectedButton,
        assignedEmployees,
        setAssignedEmployees,
        assignedSupervisores,
        setAssignedSupervisores,
        assignedSupervisor,
        setAssignedSupervisor,
        timeOptions,
        handleCloseModal,
        handleConfirmSelection,
        toggleModal,
        toggleModalCustomer,
        toggleModalCalendar,
        toggleModalTime,
        handleButtonPress,
        unAssingEmployee,
        setDateFrom,
        setDateUntil,
        setIsModalCustomerVisible,
        closeModalCustomer,
        assingedCustomer,
        time,
        setTime,
        onTimeChange,
        setCurrentTime,
        currentTime,
        createService,
        userInfo,
        loading,
        message,
        isModalService,
        setIsModalService,
        toggleModalSevice
    };
};
