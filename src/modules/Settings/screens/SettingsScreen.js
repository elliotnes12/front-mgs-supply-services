import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, TextInput, TouchableOpacity, View, Text, ScrollView } from "react-native";
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
import { Header } from "../../../components/core/Header";
import StyledText from "../../../utils/globalstyle";

export function SettingsScreen() {
  const { logout, user: { role, active, email, businessType }, userInfo } = useAuth();
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
      formik.setFieldValue("language", "English");
      formik.setFieldValue("ubication", "New York");
      formik.setFieldValue("email", email);
      formik.setFieldValue("name", userInfo.name);
      formik.setFieldValue("businessType", userInfo.businessType);
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

    <ScrollView style={styles.background}>
      <Header
        title={"Settings"}
      />
      <SafeAreaView style={styles.container}>

        <View style={styles.bgContainerAvatar}>
          <View style={styles.containerImg}>
            <View style={styles.imgProfile}>
              {image ? (
                <Image style={{ width: "100%", height: "100%" }} source={{ uri: image }} />
              ) : (
                getIconById("iconAvatar")
              )}
            </View>
          </View>

          <TouchableOpacity style={{ width: 150 }} onPress={() => setIsModalVisible(true)}>
            <LinearGradient style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20 }} colors={['#CEDC39', '#7DA74D']} >
              <View style={{ width: 20, height: 20, marginRight: 5 }}>
                {getIconById("iconEditWhite")}
              </View>
              <Text style={styles.signOffText}>Edit Profile</Text>
            </LinearGradient>
          </TouchableOpacity>


        </View>

        <View style={{ paddingHorizontal: 30, marginBottom: 10 }}>
          <StyledText boldGray font17pt>Preferences</StyledText>
        </View>

        <View style={[styles.containerFields, { borderBottomWidth: 12, borderColor: "#fff", marginBottom: 15 }]}>
          <View style={styles.field}>
            <View style={styles.iconField}>
              {getIconById("iconLanguage")}
            </View>
            <StyledText regularGray>language:</StyledText>
            <TextInput
              editable={!active}
              placeholderTextColor="#333"
              autoCapitalize="none"
              style={styles.input}
              value={formik.values.language}
              onChangeText={(text) => formik.setFieldValue("language", text)}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
            />
          </View>

          <View style={styles.field}>
            <View style={styles.iconField}>
              {getIconById("iconUbication")}
            </View>
            <StyledText regularGray>Ubication:</StyledText>
            <TextInput
              editable={!active}
              placeholder="Name"
              placeholderTextColor="#7DA74D"
              autoCapitalize="none"
              style={styles.input}
              value={formik.values.ubication}
              onChangeText={(text) => formik.setFieldValue("ubication", text)}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
            />
          </View>

        </View>

        <View style={styles.containerFields}>

          <View style={{ marginBottom: 10 }}>
            <StyledText boldGray font17pt>Personal Info</StyledText>
          </View>

          <View style={styles.field}>
            <View style={styles.iconField}>
              {getIconById("iconAvatarName")}
            </View>
            <StyledText regularGray>Name:</StyledText>
            <TextInput
              editable={!active}
              autoCapitalize="none"
              style={styles.input}
              value={formik.values.name}
              onChangeText={(text) => formik.setFieldValue("name", text)}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
            />
          </View>


          <View style={styles.field}>
            <View style={styles.iconField}>
              {getIconById("iconMail")}
            </View>
            <StyledText regularGray>Email:</StyledText>
            <TextInput
              editable={!active}
              autoCapitalize="none"
              style={styles.input}
              value={formik.values.email}
              onChangeText={(text) => formik.setFieldValue("email", text)}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
            />
          </View>


          <View style={styles.field}>
            <View style={styles.iconField}>
              {getIconById("iconBriefcase")}
            </View>
            <StyledText regularGray>Business type:</StyledText>
            <TextInput
              editable={!active}
              autoCapitalize="none"
              style={styles.input}
              value={formik.values.businessType}
              onChangeText={(text) => formik.setFieldValue("businessType", text)}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
            />
          </View>


          <View style={styles.field}>
            <View style={styles.iconField}>
              {getIconById("iconPhone")}
            </View>
            <StyledText regularGray>Telephone:</StyledText>
            <TextInput
              editable={!active}
              autoCapitalize="none"
              style={styles.input}
              value={formik.values.telephone}
              onChangeText={(text) => formik.setFieldValue("telephone", text)}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
            />
          </View>

        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={{ width: 170 }} onPress={() => setIsModalVisible(true)}>
            <LinearGradient style={styles.signOff} colors={['#CEDC39', '#7DA74D']} >
              <Text style={styles.signOffText}>Sign Off</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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



    </ScrollView>
  );
}
