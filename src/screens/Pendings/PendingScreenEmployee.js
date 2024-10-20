import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View
} from "react-native";
import { Service } from "../../api/service";
import { Header } from "../../components/core/Header";
import { LoadingScreen } from "../../components/core/LoadingScreen";
import { useAuth } from "../../modules/Auth/hooks";
import { stylesGlobal } from "../../modules/styles/global.style";
import { getBusinessLabel, screens } from "../../utils";
import StyledText from "../../utils/globalstyle";
import { getIconById } from "../../utils/util";
import { styles } from "./styles/PendingScreen.styles";

export function PendingScreenEmployee() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const controllerService = new Service();
  const { accessToken, userInfo } = useAuth();
  const navigation = useNavigation();


  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setLoading(true)
          const { data, meta } = await controllerService.findByServicesInProcessEmployee(accessToken, userInfo._id);
          console.log()
          if (meta.code != 200) {
            throw new Error();
          }
          setTasks(data);
        } catch (error) {
          setTasks([]);
        } finally {
          setLoading(false)
        }
      })();
    }, [])
  );




  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.container_item}>
      <View>
        <StyledText font16pt bold style={styles.office}>
          {item.customer.businessType} {item.category}
        </StyledText>
        <View style={styles.notice}>
          <View style={stylesGlobal.imageMin}>{getIconById("notice")}</View>
          <StyledText paraStyles={{ marginLeft: 5 }} font12pt regularGray>
            {getBusinessLabel(item.customer.businessType, item.category)}
          </StyledText>
        </View>
        <StyledText font14pt bold>
          Assigned Supervisor:
        </StyledText>
        <StyledText paraStyles={{ marginBottom: 5 }} font12pt regularGray>
          {item.supervisor.name} {item.supervisor.lastName}
        </StyledText>
        <StyledText font14pt regularGray>
          Assigned employees: {item.employees.length}
        </StyledText>
        <View style={styles.employeeList}>
          {item.employees.map((employee) => (
            <View key={employee.idEmployee} style={styles.item}>
              <View style={styles.item__img}>{getIconById("iconAvatar")}</View>
              <StyledText font12pt regularGray>
                {employee.name}
              </StyledText>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => {
          navigation.navigate(
            screens.global.completeService,
            {
              serviceId: item.id
            }
          )
        }} style={styles.options__item}>
          <View style={{ width: 30, height: 30, padding: 1 }}>
            {getIconById("iconsuccess")}
          </View>
          <StyledText font12pt asparagus regularGray>
            Complet
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
    <View style={{ backgroundColor: "#f2f2f2", flex: 1 }}>
      <Header title={"Pendings"} />
      <View
        style={{
          flexGrow: 1,
          flexDirection: "row",
          paddingHorizontal: 24
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
    </View>
  );
}
