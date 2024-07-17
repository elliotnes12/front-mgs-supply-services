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

export const getIcon = (label) => {
  switch (label) {
    case "icon-support":
      return assets.image.png.iconSupport;
    case "icon-maletin-gray":
      return assets.image.png.iconMaletaGray;
    case "icon-maletin-white":
      return assets.image.png.iconMaletin;
    case "icon-profile-white":
      return assets.image.png.iconProfile;
    case "icon-profile-gray":
      return assets.image.png.iconProfileGray;
    case "services":
      return assets.image.png.iconMaletaFocus;
    case "orders":
      return assets.image.png.documentouno;
    case "raiting":
      return assets.image.png.estrellauno;
    case "services-focus":
      return assets.image.png.iconServices;
    case "orders-focus":
      return assets.image.png.documentosdos;
    case "raiting-focus":
      return assets.image.png.estrellados;
    case "pleca-promos":
      return assets.image.png.pleca;
    default:
      return null;
  }
};
