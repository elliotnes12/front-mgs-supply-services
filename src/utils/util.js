import { assets } from "../assets";


export const getIcon = (label) => {
    switch (label) {
      case "services":
        return assets.image.png.iconMaletaFocus;
      case "orders":
        return assets.image.png.documentouno;
      case "raiting":
        return assets.image.png.comentariosuno;
      case "services-focus":
        return assets.image.png.iconServices;
      case "orders-focus":
        return assets.image.png.documentosdos;
      case "raiting-focus":
        return assets.image.png.comentariosdos;
      default:
        return null;
    }
  };
  