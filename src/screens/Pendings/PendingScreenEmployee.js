import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Image } from "native-base";
import { assets } from "../../assets";
import { styles } from "./styles/PendingScreen.styles";
import { stylesGlobal } from "../../modules/styles/global.style";
import { Header } from "../../components/core/Header";
import { LoadingScreen } from "../../components/core/LoadingScreen";
import { getIconById } from "../../utils/util";
import StyledText from "../../utils/globalstyle";

export function PendingScreenEmployee() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTasks([
      {
        id: 1,
        title: "Cleaning office",
        description: "cleaning de lobby area",
        employees: [
          { idEmployee: "2323", name: "Jose Luis Carmona" },
          { idEmployee: "2323", name: "Jorge Antonio Ruiz Perez" },
        ],
      },
      {
        id: 2,
        title: "Cleaning Hospital",
        description: "cleaning de lobby area",
        employees: [{ idEmployee: "43434", name: "Carlos Roberto Garcia" }],
      },
      {
        id: 3,
        title: "Cleaning Hospital",
        description: "cleaning de lobby area",
        employees: [{ idEmployee: "43434", name: "Carlos Roberto Garcia" }],
      },
    ]);
    setLoading(false);
  }, []);

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.container_item}>
      <View>
        <StyledText font16pt bold style={styles.office}>
          {item.title}
        </StyledText>
        <View style={styles.notice}>
          <View style={stylesGlobal.imageMin}>{getIconById("notice")}</View>
          <StyledText font12pt regularGray>
            {item.description}
          </StyledText>
        </View>
        <StyledText font14pt regularGray>
          Assigned employees: {item.employees.length}
        </StyledText>
        <View style={styles.employeeList}>
          {item.employees.map((employee) => (
            <View key={employee.idEmployee} style={styles.item}>
              <View style={styles.item__img}>{getIconById("iconProfile")}</View>
              <StyledText font12pt regularGray>
                {employee.name}
              </StyledText>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.options__item}>
          <View style={{ width: 30, height: 30, padding: 1 }}>
            <Image
              source={assets.image.png.iconsuccess}
              style={{ width: "100%", height: "100%" }}
            />
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
    <>
      <Header title={"Pendings"} />
      <View
        style={{
          flexGrow: 1,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        {loading && <LoadingScreen />}
        {!loading && tasks.length > 0 && (
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            contentContainerStyle={styles.scrollViewContent}
          />
        )}
        {!loading && tasks.length === 0 && <Text>Empty</Text>}
      </View>
    </>
  );
}
