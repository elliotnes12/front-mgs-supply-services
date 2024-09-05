import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, TextInput, TouchableOpacity, View, Text } from "react-native";
import { useAuth } from "../../Auth/hooks";
import { useFormik } from "formik";
import * as ImagePicker from 'expo-image-picker';
import { ENV } from "../../../utils";
import { initialValues, validationSchema } from "../forms/Settings.forms";
import { styles } from "../styles/settings.styles";
import { LinearGradient } from 'expo-linear-gradient';
import { assets } from "../../../assets";
import { Color } from "../../../utils/constantsStyle";
import { AlertConfirm } from "../../../components/core/Modal/AlertConfirm";
import { getIconById } from "../../../utils/util";

export function SettingsScreen() {
  const { logout, user: { role, active, email }, userInfo } = useAuth();
  const [image, setImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idEmployee, setIdEmployee] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isCompanyFocused, setIsCompanyFocused] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        // Tu lógica de envío de datos aquí
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    if (userInfo) {
      formik.setFieldValue("name", userInfo.name);
      formik.setFieldValue("lastName", userInfo.lastName);
    }
    formik.setFieldValue("email", email);
    if (role.name !== ENV.TYPES_USERS.CUSTOMER) {
      setIdEmployee(true);
    }

    if (role.name === ENV.TYPES_USERS.CUSTOMER && !active) {
      setActiveProfile(true);
    }
  }, [userInfo]);

  const handleNameFocus = () => setIsNameFocused(true);
  const handleNameBlur = () => setIsNameFocused(false);
  const handleLastNameFocus = () => setIsLastNameFocused(true);
  const handleLastNameBlur = () => setIsLastNameFocused(false);
  const handleCompanyFocus = () => setIsCompanyFocused(true);
  const handleCompanyBlur = () => setIsCompanyFocused(false);

  const saveImage = async (imageUri) => {
    try {
      setImage(imageUri);
      setIsModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (result.assets[0]) {
        await saveImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };


  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerImg}>
          <View style={styles.imgProfile}>
            {image ? (
              <Image style={{ width: "100%", height: "100%" }} source={{ uri: image }} />
            ) : (
                getIconById("iconAvatar")
            )}
          </View>
        </View>

        <View>
          <View style={[styles.field, { borderColor: Color.gray1}]}>
            <TextInput
              editable={!active}
              placeholder="Name"
              placeholderTextColor="#7DA74D"
              autoCapitalize="none"
              style={styles.input}
              value={formik.values.name}
              onChangeText={(text) => formik.setFieldValue("name", text)}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
            />
          </View>

          <View style={[styles.field, { borderColor: Color.gray1}]}>
            <TextInput
              editable={!active}
              placeholder="LastName"
              placeholderTextColor="#7DA74D"
              autoCapitalize="none"
              style={styles.input}
              value={formik.values.lastName}
              onChangeText={(text) => formik.setFieldValue("lastName", text)}
              onFocus={handleLastNameFocus}
              onBlur={handleLastNameBlur}
            />
          </View>

          <View style={[styles.field, { borderColor: Color.gray1}]}>
            <TextInput
              editable={false}
              placeholder="Email"
              placeholderTextColor="#7DA74D"
              autoCapitalize="none"
              style={styles.input}
              value={formik.values.email}
            />
          </View>

          {idEmployee && (
            <View style={styles.field}>
              <TextInput
                editable={false}
                placeholder="Id Employee"
                placeholderTextColor="#7DA74D"
                autoCapitalize="none"
                style={styles.input}
                value={userInfo.idEmployee}
              />
            </View>
          )}

        </View>

        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.signOff}>
            <Text style={styles.signOffText}>Sign Off</Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>


      <AlertConfirm
        show={isModalVisible}
        type={'info'}
        onClose={closeModal}
        textConfirm="LogOut"
        onConfirm={() => logout()}
        message={"Are you sure you want to log out?"}
        isDanger
      />

    </View>
  );
}
