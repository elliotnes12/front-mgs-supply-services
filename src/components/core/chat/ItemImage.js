import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AutoHeightImage from "react-native-auto-height-image";
import { styled } from "../styles/ItemImage.styles";
import { ENV, screens } from "../../../utils";
import { useAuth } from "../../../modules/Auth/hooks";
import { Image } from "react-native";

export function ItemImage({ message }) {
  const { user } = useAuth();
  const isMe = user._id === message.user._id;
  const styles = styled(isMe);
  const navigation = useNavigation();

  const imageUrl = `${ENV.BASE_PATH}/${message.message}`;

  const onOpenImage = () => {
    navigation.navigate(screens.global.imageFullScreen, { uri: imageUrl });
  };

  return (
    <View style={styles.content}>
      <View style={styles.message}>
        <Pressable onPress={onOpenImage}>
          <Image
            width={300}
            maxHeight={400}
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
            style={styles.image}
            onError={(error) => console.log("Image load error:", error)}
          />
        </Pressable>
        <Text style={styles.date}>
          {message.createdAtFormatted}
        </Text>
      </View>
    </View>
  );
}
