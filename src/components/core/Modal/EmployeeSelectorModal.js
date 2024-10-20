import React, { useState, useEffect } from 'react';
import { View, Text, Modal, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Employee } from '../../../api/employee';
import { useAuth } from '../../../modules/Auth/hooks';
import StyledText, { StyledGradientButton } from '../../../utils/globalstyle';
import { getIconById } from "../../../utils/util";
import { styles } from './styles/EmployeeSelectorModal.styles';
import { LoadingScreen } from '../LoadingScreen';

const EmployeeSelectorModal = ({ isVisible, onClose, onConfirm, assignedEmployees }) => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState();
    const [loading, setLoading] = useState(false);
    const [searchType, setSearchType] = useState('name');
    const apiEmployee = new Employee();
    const [isEmpty, setIsEmpty] = useState(false)
    const { accessToken } = useAuth();
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setSearchQuery("")
        setPage(0)
        setIsEmpty(false)
        setEmployees([])
        setSelectedEmployees([])
        setSelectedEmployees(assignedEmployees)
        fetchEmployees();

    }, [isVisible]);  


    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const { data, meta } = await apiEmployee.findAll(accessToken, page, 20, "employee");

            if (meta.code == 200) {
                setEmployees(data);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching employees:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadMoreEmployees = () => {
        if (!loading && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const searchEmploye = async () => {
        try {
            if (searchQuery.length > 0) {
                setLoading(true);

                if (searchType == 'id') {

                    const { data, meta } = await apiEmployee.findEmployeById(accessToken, searchQuery, 'employee');
                    if (meta.code != 200) {
                        throw new Error();
                    }

                    setEmployees([data]);
                }
                else {

                    setPage(0)
                    const { data, meta } = await apiEmployee.findEmployeByName(accessToken, searchQuery?.trim(), 'employee', page, 20);
                    if (meta.code != 200) {
                        throw new Error();
                    }

                    setEmployees(data);
                }

                setIsEmpty(false)
            }
        } catch (error) {
            setEmployees([])
            setIsEmpty(true)
        } finally {
            setLoading(false);
        }
    };

    const toggleEmployeeSelection = (employee) => {
        setSelectedEmployees(prevSelected => {
            const isAlreadySelected = prevSelected.some(emp => emp.idEmployee === employee.idEmployee);
            const isAssigned = assignedEmployees.some(emp => emp.idEmployee === employee.idEmployee);

            if (isAlreadySelected || isAssigned) {
                return prevSelected;
            } else {
                return [...prevSelected, employee];
            }
        });
    };

    const handleSearchChange = (text) => {
        setSearchQuery(text);
    };

    const handleConfirm = () => {
        onConfirm(selectedEmployees);
        onClose();
    };

    const keyboardType = searchType === 'id' ? 'numeric' : 'default';

    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={{ width: 30, height: 30 }}>
                        {getIconById("iconlupa")}
                    </View>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={`Search by ${searchType === 'id' ? 'employee ID' : 'name'}`}
                        value={searchQuery}
                        onChangeText={handleSearchChange}
                        keyboardType={keyboardType}
                        onEndEditing={searchEmploye}
                        returnKeyType="send"
                        editable={!loading}  
                    />
                    {!loading && searchQuery.length > 0 &&

                        <TouchableOpacity
                            onPress={() => {
                                setSearchQuery("");
                                setIsEmpty(false);
                                fetchEmployees();
                            }}
                            style={{ width: 30, height: 30, marginRight: 10 }}>
                            {getIconById("iconClear")}
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={() => setSearchType(prevType => prevType === 'name' ? 'id' : 'name')}>
                        <View style={{ width: 30, height: 30 }}>
                            {getIconById(searchType === 'name' ? "iconKeyboard" : "iconPinPhone")}
                        </View>
                    </TouchableOpacity>
                </View>

                {loading && <LoadingScreen />}

                {!loading && !isEmpty &&
                    <FlatList
                        data={employees}
                        keyExtractor={(item) => item.idEmployee.toString()}
                    renderItem={({ item }) => {
                        const isAssigned = assignedEmployees.some(emp => emp.idEmployee === item.idEmployee);
                        const isSelected = selectedEmployees.includes(item);

                        return (
                            <TouchableOpacity
                                key={item.idEmployee}
                                style={[
                                    styles.item,
                                    isSelected && styles.selectedItem,
                                    isAssigned && styles.disabledItem  // Style for already assigned employees
                                ]}
                                onPress={() => !isAssigned && toggleEmployeeSelection(item)}  // Prevent selection if assigned
                                disabled={isAssigned}  // Disable interaction if already assigned
                            >
                                <View style={styles.item__avatar}>
                                    {getIconById("iconAvatar")}
                                </View>
                                <View style={[styles.item__content, { flexDirection: "row", justifyContent: "space-between" }]}>
                                    <Text>{item.name + " " + item.lastName}</Text>
                                    <Text>{item.idEmployee}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    onEndReached={loadMoreEmployees}
                    onEndReachedThreshold={0.5}
                />

                }
                {isEmpty && !loading &&
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <StyledText regularGreen>Employee not found</StyledText>
                    </View>
                }

                {!loading &&
                    <View style={styles.confirmButtonContainer}>
                        <StyledGradientButton disabled={selectedEmployees?.length == 0} text={"Confirm"} action={handleConfirm} />
                    </View>
                }
            </View>
        </Modal>
    );
};

export default EmployeeSelectorModal;
