import { useState } from "react";

export const useCreateServiceMethods = () => {
    const [bussinessName, setBussinessName] = useState("");
    const [dateFrom, setDateFrom] = useState(null);
    const [dateUntil, setDateUntil] = useState(null);
    const [bussinessAdditional, setBussinessAdditional] = useState("");
    const [selectedAddress, setSelectedAddress] = useState("");
    const [mapClicked, setMapClicked] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalCalendarVisible, setIsModalCalendar] = useState(false);
    const [isModalEmployeeVisible, setModalEmployeeVisible] = useState(false);
    const [isModalCustomerVisible, setIsModalCustomerVisible] = useState(false);
    const [selectedButton, setSelectedButton] = useState("Cleaning");
    const [assignedEmployees, setAssignedEmployees] = useState([]);

    const timeOptions = [
        {
            id: "1",
            icon: "iconCalendar",
            label: dateFrom != null && dateUntil ? dateFrom + "-" + dateUntil : "Choose a Date",
            callback: () => setIsModalCalendar(true),
        },
        {
            id: "2",
            icon: "icontime",
            label: "Choose a Time",
            callback: () => console.log(""),
        },
        {
            id: "3",
            icon: "iconlupa",
            label: "Assign Employee",
            callback: () => handleOpenModal(),
        },
    ];

    const handleOpenModal = () => {
        setModalEmployeeVisible(true);
    };

    const handleCloseModal = () => {
        setModalEmployeeVisible(false);
    };

    const handleConfirmSelection = (selected) => {
        setAssignedEmployees(selected);
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
        if (isModalVisible) {
            setMapClicked(false);
        }
    };

    const toggleModalCustomer = () => {
        setIsModalCustomerVisible((prevStatus) => !prevStatus);
    };

    const toggleModalCalendar = () => {
        setIsModalCalendar((prevStatus) => !prevStatus);
    };

    const handleButtonPress = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const unAssingEmployee = (id) => {
        const tempAssignedEmployees = assignedEmployees.filter(
            (element) => element.idEmployee !== id
        );
        setAssignedEmployees(tempAssignedEmployees);
    };

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
        selectedButton,
        setSelectedButton,
        assignedEmployees,
        setAssignedEmployees,
        timeOptions,
        handleOpenModal,
        handleCloseModal,
        handleConfirmSelection,
        toggleModal,
        toggleModalCustomer,
        toggleModalCalendar,
        handleButtonPress,
        unAssingEmployee,
        setDateFrom,
        setDateUntil,
        setIsModalCustomerVisible

    };
};
