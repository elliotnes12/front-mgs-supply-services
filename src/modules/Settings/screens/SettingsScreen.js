import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useAuth } from "../../Auth/hooks";
import { Button, Icon, View, Text } from "native-base";
import { styles } from "../styles/settings.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import CustomModal from "../../../components/core/Modal/Modal";
import { ENV } from "../../../utils";
import { initialValues, validationSchema } from "../forms/Settings.forms";
import { useFormik } from "formik";

export function SettingsScreen() {
  const { logout, user: { role, active, email }, userInfo } = useAuth();
  const [image, setImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idEmployee, setIdEmployee] = useState(false)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {


      try {


      } catch (error) {

      }
    },
  });


  useEffect(() => {

    if (userInfo != null && userInfo != undefined) {


      formik.setFieldValue("name", userInfo.name);
      formik.setFieldValue("lastName", userInfo.lastName);
    }

    formik.setFieldValue("email", email);

    if (role.name != ENV.TYPES_USERS.CUSTOMER) {
      setIdEmployee(true)
    }




  }, []);


  const saveImage = async (imageUri) => {
    try {
      setImage(imageUri);
      setIsModalVisible(false);
    } catch (error) {
      throw error;
    }
  }

  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (result.assets[0] !== undefined) {
        await saveImage(result.assets[0].uri);
      }

    } catch (error) {
      alert("Error uploading image: " + error.message);
    }
  }

  const closeModal = () => {
    setIsModalVisible(false);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImg}>
        <View style={styles.imgProfile}>
          <Image style={{ width: "100%", height: "100%" }} source={{ uri: image }} />
        </View>
        <TouchableOpacity
          style={styles.camera}
          onPress={() => setIsModalVisible(true)}>
          <Icon as={MaterialCommunityIcons} name="camera-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.field}>
          <View style={styles.icon}>
            <Icon as={MaterialCommunityIcons} name="account" size={30} color="#fff" />
          </View>
          <TextInput
            editable={!active}
            placeholder="Name"
            placeholderTextColor="#7DA74D"
            autoCapitalize="none"
            style={styles.input}
            value={formik.values.name}
            onChangeText={(text) => formik.setFieldValue("name", text)}
          />
        </View>

        <View style={styles.field}>
          <View style={styles.icon}>
            <Icon as={MaterialCommunityIcons} name="account" size={30} color="#fff" />
          </View>
          <TextInput
            editable={!active}
            placeholder="LastName"
            placeholderTextColor="#7DA74D"
            autoCapitalize="none"
            style={styles.input}
            value={formik.values.lastName}
            onChangeText={(text) => formik.setFieldValue("lastName", text)}
          />
        </View>


        <View style={[styles.field, { borderColor: "rgba(206, 220, 57, 1)" }]}>
          <View style={[styles.icon, { backgroundColor: "rgba(206, 220, 57, 1)" }]}>
            <Icon as={MaterialCommunityIcons} name="email" size={25} color="#fff" />
          </View>
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
            <View style={styles.icon}>
              <Icon as={MaterialCommunityIcons} name="id-card" size={25} color="#fff" />
            </View>
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

      <TouchableOpacity style={styles.singOff} onPress={logout}>
        <Text>Sing Off</Text>
      </TouchableOpacity>

      <CustomModal isVisible={isModalVisible} onClose={closeModal}>
        <View>
          <TouchableOpacity onPress={uploadImage}>
            <Icon as={MaterialCommunityIcons} name="camera" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </CustomModal>
    </SafeAreaView>
  );
}
