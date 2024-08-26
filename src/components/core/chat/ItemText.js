import { Text, TouchableOpacity, View } from "react-native";
import {styled} from "../styles/ItemText.styles";
import { useAuth } from "../../../modules/Auth/hooks";
import {DateTime} from "luxon";

export function ItemText({message}) {

  const {user} = useAuth();
  const isMe = user._id === message.user._id;
  const styles = styled(isMe);
  const createMessage = new Date(message.createdAt);

  return (
    <TouchableOpacity activeOpacity={1} style={styles.content}>
        <View style={styles.message}>
            {isMe && 
              <Text style={styles.you}>You</Text>
            }
            <Text>{message.message}</Text> 
            <Text style={styles.time}>{message.createdAtFormatted}</Text>
        </View>
    </TouchableOpacity>
  )
}
