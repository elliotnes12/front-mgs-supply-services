import { StyleSheet } from "react-native";
import { Color } from "../../../utils/constantsStyle";

export const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 10,
    paddingLeft: 10,
    color: Color.gray1,

  },
  input: {
    backgroundColor: "transparent",
    height: 40,
    fontSize: 14,
    fontWeight: "500",
    color: Color.gray3,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#fff",
    paddingHorizontal: 20,
    marginBottom: 20,
    width: 200
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#075985",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: Color.gray1,
    backgroundColor: "red"
  },
  datePicker: {
    height: 120,
    marginTop: -10,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
});
