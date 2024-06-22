import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator, View, Text } from "react-native";
import { useAuth } from "../../Auth/hooks";
import { useFormik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import CustomModal from "../../../components/core/Modal/Modal";
import { ENV } from "../../../utils";
import { initialValues, validationSchema } from "../forms/Settings.forms";
import { styles } from "../styles/settings.styles";
import { LinearGradient } from 'expo-linear-gradient';
import { assets } from "../../../assets";

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
              <Image style={{ width: "100%", height: "110%" }} resizeMode="cover" source={assets.image.png.profile} />
            )}
          </View>
        </View>

        <View>
          <View style={[styles.field, { borderColor: isNameFocused ? "rgba(125, 167, 77, 1)" : "rgba(0, 110, 233, 0.1)" }]}>
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

          <View style={[styles.field, { borderColor: isLastNameFocused ? "rgba(125, 167, 77, 1)" : "rgba(0, 110, 233, 0.1)" }]}>
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

          <View style={[styles.field, { borderColor: "rgba(0, 110, 233, 0.1)" }]}>
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

          {!idEmployee && !active && (
            <View style={[styles.field, { borderColor: isCompanyFocused ? "rgba(125, 167, 77, 1)" : "rgba(0, 110, 233, 0.1)" }]}>
              <TextInput
                placeholder="Company"
                placeholderTextColor="#7DA74D"
                autoCapitalize="none"
                style={styles.input}
                onFocus={handleCompanyFocus}
                onBlur={handleCompanyBlur}
              />
            </View>
          )}
        </View>

        <TouchableOpacity  onPress={logout}>
          <LinearGradient colors={['#CEDC39', '#7DA74D']} style={styles.signOff}>
            <Text style={styles.signOffText}>Sign Off</Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>

      <CustomModal isVisible={isModalVisible} onClose={closeModal}>
        <Text style={styles.errorlogin}>Modal Message</Text>
      </CustomModal>
    </View>
  );
}
