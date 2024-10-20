import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import React, { useCallback, useState } from "react";
import { ItemService, ItemServiceEmployee, ItemServiceManager, ItemServiceSupervisor } from "../../components/core/items/ItemService";
import { Header } from "../../components/core/Header";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../../modules/Auth/hooks";
import { Service } from "../../api/service";
import { LoadingScreen } from "../../components/core/LoadingScreen";
import StyledText from "../../utils/globalstyle";

export function ServicesScreen() {
  const [services, setServices] = useState([]);
  const { accessToken, userInfo } = useAuth();
  const controllerService = new Service();
  const [isLoading, setIsLoading] = useState(false)


  useFocusEffect(
    useCallback(() => {
      findAllByProfile();
    }, [])
  );


  const findAllByProfile = async () => {
    setIsLoading(true)
    try {

      let response = {};

      switch (userInfo.type) {


        case "manager":

          response = await controllerService.findAllServicesByManager(accessToken);
          setServices(response.data);
          break;

        case "supervisor":

          response = await controllerService.findAllServices(accessToken, userInfo._id);
          setServices(response.data);
          break;

        case "employee":

          response = await controllerService.findAllServicesByEmployee(accessToken, userInfo._id);
          setServices(response.data);
          break;

        default:
          response = await controllerService.findAllServicesByCustomer(accessToken, userInfo._id);
          setServices(response.data);

      }
    } catch (error) {
      setServices([]);
    } finally {
      setIsLoading(false)
    }
  }

  const searchServiceByTicket = async (ticket) => {
    try {

      let response = {};
      setIsLoading(true)

      switch (userInfo.type) {


        case "manager":

          response = await controllerService.findServiceByTicket(accessToken, ticket);

          if (response.meta.code == 404) {
            throw new Error();
          }
          setServices([response.data]);
          break;

        case "supervisor":

          response = await controllerService.findServiceByTicketAndSupervisor(accessToken, userInfo._id, ticket);

          if (response.meta.code == 404) {
            throw new Error();
          }
          setServices([response.data]);
          break;

        case "employee":

          response = await controllerService.findServiceByTicketAndEmployee(accessToken, userInfo._id, ticket);

          if (response.meta.code == 404) {
            throw new Error();
          }

          setServices([response.data]);
          break;

        default:
          response = await controllerService.findServiceByTicketAndCustomer(accessToken, userInfo._id, ticket);

          if (response.meta.code == 404) {
            throw new Error();
          }

          setServices(response.data);

      }
    } catch (error) {
      setServices([]);
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <View style={styles.container}>
      <Header
        title={"Services"}
        goBack={true}
        subtitle={"Available services"}
        search={searchServiceByTicket}
        refresh={findAllByProfile}
        total={services?.length}
      />
      {!isLoading && services?.length > 0 &&
        < FlatList
          data={services}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {userInfo.type == "manager" &&
                <ItemServiceManager key={item.id} item={item} />
              }
              {userInfo.type == "supervisor" &&
                <ItemServiceSupervisor key={item.id} item={item} />
              }
              {userInfo.type == "employee" &&
                <ItemServiceEmployee key={item.id} item={item} />
              }
              {userInfo.type == undefined &&
                <ItemService key={item.id} item={item} />
              }
          </View>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
      }
      {isLoading &&
        <LoadingScreen />
      }
      {!isLoading && services?.length == 0 &&
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <StyledText regularGreen>Services not found</StyledText>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    paddingHorizontal: 24,
    marginTop: 40,
    paddingBottom: 180,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
