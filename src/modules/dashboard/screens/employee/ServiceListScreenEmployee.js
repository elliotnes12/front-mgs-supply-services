import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { map } from "lodash";
import * as React from "react";
import { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { Service } from "../../../../api/service";
import { ItemServiceEmployee } from "../../../../components/core/items/ItemService";
import { LoadingScreen } from "../../../../components/core/LoadingScreen";
import { screens } from "../../../../utils";
import StyledText from "../../../../utils/globalstyle";
import { useAuth } from "../../../Auth/hooks";
import { styles } from "./ServiceListScreenEmployee.styles";


export const ServiceListScreenEmployee = () => {
  const navigation = useNavigation();
  const controllerService = new Service();
  const [services, setServices] = React.useState([]);
  const { user, accessToken, userInfo } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);


  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setIsLoading(true)
          const { data } = await controllerService.findAllServicesByEmployee(accessToken, userInfo._id);
          setServices(data);
        } catch (error) {
          setServices([]);
        } finally {
          setIsLoading(false)
        }
      })();
    }, [])
  );


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.options}>
        <StyledText font20pt bold>
          Services
        </StyledText>
        {services.length > 0 &&
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.tab.services.root)}
          >
            <StyledText font14pt regularGreen>
              View All
            </StyledText>
          </TouchableOpacity>
        }
      </View>

      {isLoading &&
        <LoadingScreen />
      }
      {!isLoading && services.length > 0 &&

        <View style={styles.scene}>
          {map(services, (element, id) => {
            return <ItemServiceEmployee key={id} item={element} />;
          })}
        </View>

      }
      {!isLoading && services.length == 0 &&
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <StyledText regularGreen>Services not found</StyledText>
        </View>
      }
    </View>
  );
};
