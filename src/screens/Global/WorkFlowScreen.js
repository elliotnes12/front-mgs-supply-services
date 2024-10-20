import React, { useCallback, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Header } from '../../components/core/Header';
import { ItemWorkFlow } from '../../components/core/items/ItemWorkFlow';
import { useFocusEffect } from '@react-navigation/native';
import { Service } from '../../api/service';
import { useAuth } from '../../modules/Auth/hooks';
import { Alert } from '../../components/core/Modal/Alert';
import { AlertConfirm } from '../../components/core/Modal/AlertConfirm';
import { LoadingScreen } from '../../components/core/LoadingScreen';
import StyledText from '../../utils/globalstyle';

export function WorkFlowScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const controllerService = new Service();
  const [services, setServices] = useState([]);
  const { accessToken } = useAuth();
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState("");



  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setLoading(true)
          const { data } = await controllerService.findAllServicesWorkFlow(accessToken);
          setServices(data);

        } catch (error) {

          setServices([]);
        } finally {
          setLoading(false)
        }
      })();
    }, [])
  );

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const toggleModal = () => {
    setIsModalSuccess((prevState) => !prevState)
  }


  const updateStatus = (accessToken) => {
    (async () => {
      let msg = "";
      setLoading(true)
      try {
        const response = await controllerService.updateStatus(accessToken, selectedId, 'cancelled');

        if (response.meta.code != 200) {
          throw new Error();
        }

        msg = "Service updated successfully";

        setServices(services.filter((item) => item.id != selectedId));

      } catch (error) {
        msg = "Please try again";
      }
      finally {


        setLoading((prevState) => !prevState);
        setIsModalVisible(false);
        setIsModalSuccess(true);
        setMessage(msg);
      }

    })();
  }



  return (
    <>
      <Header title={"WorkFlow"} />
      {!loading && services.length > 0 &&
        <FlatList
        data={services}
        style={{ flex: 1 }}
          renderItem={({ item }) => <ItemWorkFlow setIsModalVisible={setIsModalVisible} setSelectedId={setSelectedId} item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 20 }}
        />
      }
      {loading &&
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <LoadingScreen />
        </View>
      }
      {!loading && services.length == 0 &&
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <StyledText regularGreen>Services not found </StyledText>
        </View>
      }

      <Alert
        show={isModalSuccess}
        type={"info"}
        loading={loading}
        onClose={toggleModal}
        textConfirm="OK"
        onConfirm={() => setIsModalSuccess(false)}
        message={message}
      />

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
    </>
  );
}