import React, { useCallback, useState } from "react";
import { ScrollView, Text, View, Dimensions } from "react-native";
import { Header } from "../../components/core/Header";
import { useAuth } from "../../modules/Auth/hooks";
import StyledText from "../../utils/globalstyle";
import { getIconById } from "../../utils/util";
import { styles } from "./ReportsScreen.Styles";
import { LineChart } from "react-native-chart-kit";
import { Picker } from '@react-native-picker/picker';
import { useFocusEffect } from "@react-navigation/native";
import { Service } from "../../api/service";
import { LoadingScreen } from "../../components/core/LoadingScreen";

const screenWidth = Dimensions.get("window").width;

export function ReportsScreen() {
  const [loading, setLoading] = useState(false);
  const apiService = new Service();
  const { userInfo, accessToken } = useAuth();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const [serviceData, setServiceData] = useState({
    inProgress: [],
    cancelled: [],
    qualified: []
  });

  const [serviceDataMonth, setServiceDataMonth] = useState({
    inProgress: 0,
    cancelled: 0,
    qualified: 0
  });

  const years = Array.from({ length: 5 }, (_, index) => new Date().getFullYear() - index);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {

          setLoading(true);
          const { data } = await apiService.findTotalServicesByYear(accessToken, selectedYear);

          setServiceData({
            inProgress: data.in_progress || [],
            cancelled: data.cancelled || [],
            qualified: data.completed || []
          });


          const response = await apiService.findTotalServicesByMonth(accessToken);

          setServiceDataMonth({
            inProgress: response?.data.in_progress,
            cancelled: response?.data.cancelled,
            qualified: response?.data.completed,
          })

        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      })();
    }, [selectedYear])
  );


  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 128, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <>
      <Header
        title={"Tracking and Reporting"}
        subtitle={"MGS Supply & Services"}
      />

      <ScrollView>
        <View style={{ paddingHorizontal: 20, flex: 1, paddingVertical: 30 }}>
          <StyledText font20pt boldGray>Services </StyledText>

          <StyledText font14pt regularGreen>
            Services Tracking
          </StyledText>



          {!loading && serviceData.inProgress.length > 0 &&
            <>
              <StyledText regularGreen paraStyles={{ marginTop: 15 }} font20pt>Today</StyledText>
              <View style={{ flexDirection: "column", marginVertical: 20 }}>
                <View style={styles.item}>
                  <View style={styles.minImg}>{getIconById("minService")}</View>
                  <View style={styles.containerText}>
                    <StyledText boldGray>Services in progress</StyledText>
                    <StyledText regularGray>Cleaning the lobby area</StyledText>
                    <View style={styles.ContenidoMontly}>
                      <StyledText regularGray>Monthly Total : </StyledText>
                    <StyledText bold gold>{serviceDataMonth.inProgress}</StyledText>
                  </View>
                </View>
              </View>

              <View style={styles.item}>
                <View style={styles.minImg}>{getIconById("minService")}</View>
                <View style={styles.containerText}>
                  <StyledText boldGray>Cancelled Services</StyledText>
                  <StyledText regularGray>Cleaning the lobby area</StyledText>
                  <View style={styles.ContenidoMontly}>
                    <StyledText regularGray>Monthly Total : </StyledText>
                    <StyledText bold brightRed>{serviceDataMonth.cancelled}</StyledText>
                  </View>
                </View>
              </View>

              <View style={styles.item}>
                <View style={styles.minImg}>{getIconById("minService")}</View>
                <View style={styles.containerText}>
                  <StyledText boldGray>Qualified Services</StyledText>
                  <StyledText regularGray>Cleaning the lobby area</StyledText>
                  <View style={styles.ContenidoMontly}>
                    <StyledText regularGray>Monthly Total : </StyledText>
                    <StyledText bold brightBlue>{serviceDataMonth.qualified}</StyledText>
                  </View>
                </View>
              </View>
          </View>



            {/* Picker para seleccionar año */}
            <View style={{ marginVertical: 20 }}>
              <StyledText font17pt boldGray>Select Year:</StyledText>
              <Picker
                style={{ width: 200 }}
                selectedValue={selectedYear}
                onValueChange={(itemValue) => {
                  setSelectedYear(itemValue)
                }}
                  >
                {years.map((year) => (
                  <Picker.Item key={year} label={year.toString()} value={year} />
                ))}
              </Picker>
            </View>

            {/* Gráfico de Servicios en Progreso */}
            <View style={{ marginVertical: 20 }}>
              <StyledText headerGray>Services In Progress</StyledText>
              <LineChart
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Cambia si tienes más meses
                  datasets: [
                    {
                      data: serviceData.inProgress,
                      strokeWidth: 2, // Grosor de la línea
                    },
                  ],
                }}
                width={screenWidth - 40}
                height={220}
                chartConfig={chartConfig}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>

            {/* Gráfico de Servicios Cancelados */}
            <View style={{ marginVertical: 20 }}>
              <StyledText headerGray>Cancelled Services</StyledText>
              <LineChart
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: serviceData?.cancelled,
                      strokeWidth: 2,
                    },
                  ],
                }}
                width={screenWidth - 40}
                height={220}
                chartConfig={chartConfig}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>

            {/* Gráfico de Servicios Calificados */}
            <View style={{ marginVertical: 20 }}>
              <StyledText headerGray>Qualified Services</StyledText>
              <LineChart
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: serviceData?.qualified,
                      strokeWidth: 2,
                    },
                  ],
                }}
                width={screenWidth - 40}
                height={220}
                chartConfig={chartConfig}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>

            </>
          }
          {loading &&
            <View style={{ minHeight: 400 }}>
              <LoadingScreen />
            </View>
          }

        </View>
      </ScrollView>
    </>
  );
}
