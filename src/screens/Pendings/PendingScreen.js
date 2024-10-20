import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../../components/core/Header";
import { stylesGlobal } from "../../modules/styles/global.style";
import { getIconById } from "../../utils/util";
import { styles } from "./styles/PendingScreen.styles";
import StyledText from "../../utils/globalstyle";
import { Service } from "../../api/service";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../modules/Auth/hooks";
import { getBusinessLabel, screens } from "../../utils";
import { LoadingScreen } from "../../components/core/LoadingScreen";
import { AlertConfirm } from "../../components/core/Modal/AlertConfirm";
import { Alert } from "../../components/core/Modal/Alert";

export function PendingScreen() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userInfo, accessToken } = useAuth();
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const apiService = new Service();
  const navigation = useNavigation();


  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setLoading(true)
          const { data, meta } = await apiService.findByServicesInProcessSupervisor(accessToken, userInfo._id);
          console.log(meta)
          setTasks(data);
        } catch (error) {
          setTasks([]);
        } finally {
          setLoading(false)
        }
      })();
    }, [])
  );



  const updateStatus = (accessToken) => {
    (async () => {
      let msg = "";
      setLoading(true)
      try {
        const response = await apiService.updateStatus(accessToken, selectedId, 'cancelled');

        if (response.meta.code != 200) {
          throw new Error();
        }

        msg = "Service updated successfully";

        setTasks(tasks.filter((item) => item.id != selectedId));

      } catch (error) {
        msg = "Please try again";
      }
      finally {


        setLoading(false);
        setIsModalVisible(false);
        setIsModalSuccess(true);
        setMessage(msg);
      }

    })();
  }


  const capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


  const closeModal = () => {
    setIsModalVisible(false);
  };

  const toggleModal = () => {
    setIsModalSuccess((prevState) => !prevState)
  }


  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.container_item}>
      <View style={{ flex: 2, flexWrap: "wrap" }}>
        <StyledText font16pt bold>
          {item.customer.businessType} {capitalizarPrimeraLetra(item.category)}
        </StyledText>
        <View style={styles.notice}>
          <View style={stylesGlobal.imageMin}>{getIconById("notice")}</View>
          <StyledText paraStyles={{ marginLeft: 5 }} font10pt regularGray>
            {getBusinessLabel(item.customer.businessType, item.category)} 
          </StyledText>
        </View>
        <StyledText font14pt regularGray>
          Assigned employees: {item.employees.length}
        </StyledText>
        <View style={{ flex: 1 }}>
          {item.employees.map((employee) => (
            <View key={employee.idEmployee} style={styles.item}>
              <View style={styles.item__img}>{getIconById("iconAvatar")}</View>
              <StyledText font12pt regularGray>
                {employee.name} {employee.lastName} - {employee.idEmployee}
              </StyledText>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => {
          navigation.navigate(
            screens.global.updateService,
            {
              serviceId: item.id
            }
          )
        }} style={styles.options__item}>
          <View style={stylesGlobal.imageMd}>{getIconById("iconEdit")}</View>
          <StyledText font12pt regularGray orangeText>
            Edit
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setIsModalVisible(true)
          setSelectedId(item.id)
        }} style={styles.options__item}>
          <View style={stylesGlobal.imageMd}>{getIconById("iconDecline")}</View>
          <StyledText font12pt regularGray redText>
            Cancel
          </StyledText>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#7DA74D" />;
  };

  return (
    <View style={{ backgroundColor: "#F2F2F2", flex: 1 }}>
      <Header title={"Pendings"} />
      <View
        style={{
          flexGrow: 1,
          justifyContent: "center",
          flexDirection: "row",
          paddingHorizontal: 24,
          marginTop: 20
        }}
      >
        {loading && <LoadingScreen />}
        {!loading && tasks?.length > 0 && (
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            contentContainerStyle={styles.scrollViewContent}
          />
        )}
        {!loading && tasks?.length === 0 &&
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StyledText regularGreen>Services not found</StyledText>
          </View>
        }
      </View>
      <AlertConfirm
        show={isModalVisible}
        type={'info'}
        loading={loading}
        onClose={closeModal}
        textConfirm="Confirm"
        onConfirm={() => updateStatus(accessToken, selectedId, 'cancelled')}
        message={"Are you sure you want to cancel the service?"}
        isDanger
      />
      <Alert
        show={isModalSuccess}
        type={"info"}
        loading={loading}
        onClose={toggleModal}
        textConfirm="OK"
        onConfirm={() => setIsModalSuccess(false)}
        message={message}
      />
    </View>
  );
}
