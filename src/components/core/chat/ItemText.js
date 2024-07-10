import { Text, View } from "react-native";
import {styled} from "../styles/ItemText.styles";
import { useAuth } from "../../../modules/Auth/hooks";
import {DateTime} from "luxon";

export function ItemText({message}) {

  const {user} = useAuth();
  const isMe = user._id === message.user._id;
  const styles = styled(isMe);
  const createMessage = new Date(message.createdAt);

  return (
    <View style={styles.content}>
        <View style={styles.message}>
            {isMe && 
              <Text style={styles.you}>You</Text>
            }
            <Text>{message.message}</Text> 
            <Text style={styles.time}>{message.createdAtFormatted}</Text>
        </View>
    </View>
  )
}
