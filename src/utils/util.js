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



export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return `Password must be at least ${minLength} characters long.`;
  }
  if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
    let errorMessage = "Password must include:";
    if (!hasUpperCase) errorMessage += " at least one uppercase letter,";
    if (!hasLowerCase) errorMessage += " at least one lowercase letter,";
    if (!hasNumber) errorMessage += " at least one number,";
    if (!hasSpecialChar) errorMessage += " at least one special character.";

    errorMessage = errorMessage.replace(/,([^,]*)$/, '$1');
    return errorMessage;
  }

  return undefined;
};
