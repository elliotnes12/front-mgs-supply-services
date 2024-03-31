import { SafeAreaView } from "react-native";
import { useAuth } from "../../hooks";
import { Button } from "native-base";

export function SettingsScreen() {
  const {  logout } = useAuth();

  return (
    <SafeAreaView>
      <Button onPress={logout}>Cerrar Session</Button>
    </SafeAreaView>
  );
}