import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { Input, Text, TextInput } from "native-base";
import React, { useState } from "react";
import { Pressable, View, TouchableOpacity, ActivityIndicator  } from "react-native";
import { Auth } from "../../../api";
import { initialValues, validationSchema } from "./RegisterForm.form";
import { styles } from "./RegisterForm.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RadioButton, } from "react-native-paper";


const authController = new Auth();

export function RegisterForm() {
    const navigation = useNavigation();


    const [value, setValue] = useState("customer");
    const [showIdInput, setShowIdInput] = useState(false);
    const [idEmployee, setIdEmployee] = useState("");



    const handleRadioChange = (newValue) => {
        setValue(newValue);
        setShowIdInput(newValue === "company");
        formik.setFieldValue("userType", newValue);
    };

    const [hide, setHide] = useState(true);
    const [confirmHide, setConfirmHide] = useState(true);



    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {

            try {
                await authController.register(formValue.email, formValue.password);
                // navigation.goBack();
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", justifyContent: "flex-start", marginBottom: 15 }}>
                <TouchableOpacity style={{ marginRight: 35 }} onPress={() => handleRadioChange("customer")}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                            value="customer"
                            status={value === "customer" ? "checked" : "unchecked"}
                            onPress={() => handleRadioChange("customer")}
                            uncheckedColor="#000"
                            color="#7DA74D"
                        />
                        <Text style={styles.label}>Customer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRadioChange("company")}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                            value="company"
                            status={value === "company" ? "checked" : "unchecked"}
                            onPress={() => handleRadioChange("company")}
                            uncheckedColor="#000"
                            color="#7DA74D"
                        />
                        <Text style={styles.label}>Company</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.field, formik.errors.email && styles.inputError]}>
                <Input
                    placeholder="Email"
                    variant="unstyled"
                    placeholderTextColor="#7DA74D"
                    autoCapitalize={false}
                    value={formik.values.email}
                    onChangeText={(text) => formik.setFieldValue("email", text)}
                    style={styles.input}
                />
            </View>
            <View style={[styles.field, formik.errors.password && styles.inputError]}>

                <Input
                    placeholder="Password"
                    variant="unstyled"
                    autoCapitalize={false}
                    placeholderTextColor="#7DA74D"
                    value={formik.values.password}
                    secureTextEntry={hide}
                    onChangeText={(text) => formik.setFieldValue("password", text)}
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => setHide(!hide)}>
                    <MaterialCommunityIcons
                        style={styles.icon}
                        name={hide ? "eye-off" : "eye"}
                        color="#000000"
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.field, formik.errors.confirmPassword && styles.inputError]}>

                <Input
                    placeholder="Confirm Password"
                    variant="unstyled"
                    autoCapitalize={false}
                    placeholderTextColor="#7DA74D"
                    value={formik.values.confirmPassword}
                    secureTextEntry={confirmHide}
                    onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => setConfirmHide(!confirmHide)}>
                    <MaterialCommunityIcons
                        style={styles.icon}
                        name={confirmHide ? "eye-off" : "eye"}
                        color="#000000"
                        size={30}
                    />
                </TouchableOpacity>
            </View>


            {showIdInput && (

                <View style={[styles.field, formik.errors.employeeNumber && styles.inputError]}>

                    <Input
                        placeholder="employee number"
                        variant="unstyled"
                        autoCapitalize={false}
                        placeholderTextColor="#7DA74D"
                        value={formik.values.employeeNumber}
                        secureTextEntry={confirmHide}
                        onChangeText={(text) => formik.setFieldValue("employeeNumber", text)}
                        style={styles.input}
                    />
                </View>
            )}


            <Pressable style={({ pressed }) => [styles.button, pressed && { backgroundColor: '#81B547' }]} onPress={formik.handleSubmit}>
                <Text style={styles.text}>Register</Text>
            </Pressable>



        </View>
    )

}