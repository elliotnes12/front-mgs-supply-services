import { useEffect, useState } from "react";
import { FlatList, TextInput, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { getIconById } from "../../../utils/util";
import { theme } from "../../../utils/theme";
import { styles } from "./styles/CustomerSelectorModal.styles";
import StyledText, { StyledGradientButton } from "../../../utils/globalstyle";
import { Customer } from "../../../api/customer";
import { useAuth } from "../../../modules/Auth/hooks";
import { LoadingScreen } from "../LoadingScreen";

export function CustomerSelectorModal({ isVisible, onClose }) {
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchOption, setSearchOption] = useState("name");
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [selectedOption, setSelectedOption] = useState("name");
    const [customers, setCustomers] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [page, setPage] = useState(0);
    const { accessToken } = useAuth();
    const apiCustomer = new Customer();

    useEffect(() => {
        setSearchQuery("");
        setIsEmpty(false);
        setPage(0);
    }, [isVisible]);

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        try {
            setIsLoading(true);
            const { data, meta } = await apiCustomer.findAll(accessToken, page, 20);
            if (meta.code !== 200) {
                throw new Error();
            }
            setCustomers(data);
            setIsEmpty(false);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    const handleSelectCustomer = (item) => {
        setSelectedCustomer(item);
    };

    const handleConfirmSelection = () => {
        onClose(selectedCustomer);
    };

    const handleSearchChange = (text) => {
        setSearchQuery(text);
    };

    const handleSelectOption = (value) => {
        setSelectedOption(value);
        setSearchOption(value);
    };

    const searchCustomer = async () => {
        try {
            if (searchQuery != "") {
                setIsLoading(true);
                if (selectedOption == "name") {
                    setPage(0);
                    const { data, meta } = await apiCustomer.findCustomerByName(accessToken, searchQuery, page, 20);
                    if (meta.code != 200) throw new Error();

                    setCustomers(data);
                    setIsEmpty(false)

                } else if (selectedOption == "email") {

                }
            }
        } catch (error) {
            setIsEmpty(true);
        } finally {
            setIsLoading(false);
        }
    };

    const RenderCustomer = ({ item }) => {
        const isSelected = selectedCustomer?._id === item._id;
        return (
            <TouchableOpacity
                key={item._id}
                style={[styles.item, isSelected && styles.selectedItem]}
                onPress={() => handleSelectCustomer(item)}
            >
                <View style={styles.item__avatar}>{getIconById("iconAvatar")}</View>
                <View style={styles.item__content}>
                    <StyledText bold font16pt line20>{item.name}</StyledText>
                    <View style={styles.item__field}>
                        <View style={{ width: 20, height: 20, marginRight: 5 }}>
                            {getIconById("iconGreenOffice")}
                        </View>
                        <StyledText regularGray font12pt line20>
                            Business Name: {item.businessName}
                        </StyledText>
                    </View>
                    <View style={styles.item__field}>
                        <View style={{ width: 20, height: 20, marginRight: 5 }}>
                            {getIconById("iconEmailGreen")}
                        </View>
                        <StyledText regularGray font12pt line20>
                            Email: {item?.user?.email}
                        </StyledText>
                    </View>
                </View>
                {isSelected && (
                    <View style={{ width: 30, height: 30 }}>
                        {getIconById("icongreenArrow")}
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    const options = [
        { value: "name", label: "Name", iconWhite: "iconUserWhite", iconGray: "iconUserGray" },
        { value: "email", label: "Email", iconWhite: "iconEmailWhite", iconGray: "iconEmailGray" },
        { value: "business", label: "Business", iconWhite: "iconBusinessWhite", iconGray: "iconBusinessGray" },
    ];

    return (
        <Modal isVisible={isVisible} style={styles.container} animationType="slide">
            <View style={{ flex: 1 }}>
                <View style={styles.headerModal}>
                    <TouchableOpacity onPress={() => onClose(null)} style={styles.iconClose}>
                        {getIconById("iconClose")}
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                    <View style={{ width: 30, height: 30 }}>{getIconById("iconlupa")}</View>
                    <TextInput
                        style={styles.input}
                        placeholder={`Search by ${searchOption}`}
                        value={searchQuery}
                        onChangeText={handleSearchChange}
                        onEndEditing={searchCustomer}
                        returnKeyType="send"
                        editable={!isLoading}
                    />
                    {searchQuery != "" && !isLoading &&
                        <TouchableOpacity
                            onPress={() => { setSearchQuery(""); loadCustomers(); }}
                            style={{ width: 30, height: 30, marginRight: 10 }}>
                            {getIconById("iconClear")}
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.optionsContainer}>
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option.value}
                            style={[
                                styles.option,
                                selectedOption == option.value && { backgroundColor: theme.gradient.color1 }
                            ]}
                            onPress={() => handleSelectOption(option.value)}
                        >
                            <View style={{ width: 30, height: 30, padding: 5, marginRight: 5 }}>
                                {getIconById(selectedOption == option.value ? option.iconWhite : option.iconGray)}
                            </View>
                            <StyledText
                                font12pt
                                font14pt
                                regularGray={selectedOption !== option.value}
                                regularWhite={selectedOption === option.value}
                            >
                                {option.label}
                            </StyledText>
                        </TouchableOpacity>
                    ))}
                </View>

                {!isLoading && !isEmpty && (
                    <FlatList
                        data={customers}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => <RenderCustomer item={item} />}
                    />
                )}

                {isEmpty && !isLoading && (
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <StyledText regularGreen>Customer not found</StyledText>
                    </View>
                )}

                {isLoading && <LoadingScreen />}

                {!isLoading && (
                    <View style={styles.confirmButtonContainer}>
                        <StyledGradientButton disabled={selectedCustomer == undefined} text="Confirm" action={handleConfirmSelection} />
                    </View>
                )}
            </View>
        </Modal>
    );
}
