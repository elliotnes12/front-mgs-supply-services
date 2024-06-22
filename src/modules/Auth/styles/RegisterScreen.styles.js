import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    marginTop:135,
    color: "#FFFFFF",
  },
  subtitle:{
    color:"#ffffff",
    fontFamily:'Poppins_400Regular'
  },
  cuestion: {
    alignSelf: "flex-start",
    fontFamily:'Poppins_400Regular',
    color:"#ffffff",
    marginTop: 32,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  registerButton: {
    width: 155,
    height: 50,
    fontFamily:'Poppins_400Regular',
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection:"row",
    display:"flex"
  },
  register: {
    color: "#0891b2",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 30,
  },
  btnLogin: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#CEDC39",
    borderRadius: 50,
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  btnLoginText: {
    color: "#7DA74D",
  },
  container: {
    flex: 1,
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
  },
  viewInput: {
    marginBottom: 5,
  },
  field: {
    marginBottom: 10,
    width: 320,
  },
  inputContainer: {
    borderColor: "#ffffff",
    borderWidth: 1.2,
    borderRadius: 8,
    height: 45,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 18,
    flex: 1,
    height: '100%',
    color: "#000",
  },
  inputError: {
    borderColor: '#dc3545',
  },
  button: {
    backgroundColor: "#7DA74D",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: '20%',
    width: 250,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily:'Poppins_400Regular',
    letterSpacing: 0.25,
    color: 'white',
  },
  label: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily:'Poppins_400Regular',
    marginBottom: 5,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  errorlogin: {
    color: '#dc3545',
  },
  signUpButton: {
    padding: 15,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width:220
  },
  loginNowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom:20,
    width:220
  },
  loginNowText: {
    fontSize: 16,
    color: "#fff",
  },
  loginNowLink: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  
});
