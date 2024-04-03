import { SafeAreaView } from "react-native";
import { useAuth } from "../../hooks";
import { Button, Text } from "native-base";

export function ReportsScreen() {
  const {  logout } = useAuth();

  return (
    <SafeAreaView>
      <Text>Vista para los reportes </Text>
    </SafeAreaView>
  );
}