import { Image } from "react-native";
import { assets } from "../assets";
import { stylesGlobal } from "../modules/styles/global.style";

export const getIconById = (id) => {
  return (
    <Image
      alt="Icon"
      style={stylesGlobal.imageMin__img}
      resizeMode="contain"
      source={assets.image.png[id]}
    />
  );
};