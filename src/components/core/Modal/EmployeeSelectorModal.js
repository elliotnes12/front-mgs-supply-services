import React, { useState, useEffect } from 'react';
import { View, Text, Modal, FlatList, TextInput, TouchableOpacity, Button, KeyboardType, StyleSheet } from 'react-native';
import { Employee } from '../../../api/employee';
import { useAuth } from '../../../modules/Auth/hooks';
import { StyledGradientButton } from '../../../utils/globalstyle';
import { useFocusEffect } from '@react-navigation/native';

const EmployeeSelectorModal = ({ visible, onClose, onConfirm }) => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchType, setSearchType] = useState('name');
    const apiEmployee = new Employee();
    const { accessToken } = useAuth();
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setSelectedEmployees([]);

        setEmployees(prevEmployees => [...prevEmployees]);

    }, []) 

    useEffect(() => {
        if (hasMore) {
            fetchEmployees();
        }
    }, [page]);

    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const { data } = await apiEmployee.findAll(accessToken, page, 4);
            if (data.length > 0) {
                setEmployees(prevEmployees => [...prevEmployees, ...data]);
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
        if (!loading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const toggleEmployeeSelection = (employee) => {
        setSelectedEmployees(prevSelected => {
            if (prevSelected.includes(employee)) {
                return prevSelected.filter(emp => emp !== employee);
            } else {
                return [...prevSelected, employee];
            }
        });
    };

    const handleSearchChange = (text) => {
        setSearchQuery(text);
        setEmployees([]);
        setPage(1);
    };

    const handleConfirm = () => {
        onConfirm(selectedEmployees);
        onClose();
    };

    const keyboardType = searchType === 'id' ? 'numeric' : 'default';

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={`Search by ${searchType === 'id' ? 'employee ID' : 'name'}`}
                        value={searchQuery}
                        onChangeText={handleSearchChange}
                        keyboardType={keyboardType}
                    />
                    <TouchableOpacity onPress={() => setSearchType(prevType => prevType === 'name' ? 'id' : 'name')}>
                        <Text style={styles.toggleSearchType}>Buscar por {searchType === 'name' ? 'ID' : 'Nombre'}</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={employees}
                    keyExtractor={(item) => item.idEmployee.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            key={item.idEmployee}
                            style={[styles.item, selectedEmployees.includes(item) && styles.selectedItem]}
                            onPress={() => toggleEmployeeSelection(item)}
                        >
                            <Text>{item.name}</Text>
                            <Text>{item.idEmployee}</Text>
                        </TouchableOpacity>
                    )}
                    refreshing={true}
                    onEndReached={loadMoreEmployees}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={loading && <Text>Cargando...</Text>}
                />
                <StyledGradientButton text={"Confirm"} action={handleConfirm} />

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    toggleSearchType: {
        marginLeft: 10,
        color: 'blue',
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    selectedItem: {
        backgroundColor: '#ddd',
    },
});

export default EmployeeSelectorModal;
