import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({

  title: {
    color: "#7DA74D",
    fontSize: 33,
    fontFamily: "Rubik",
    textAlign: "center"
  },
  subtitle: {
    color: "#7DA74D",
    fontSize: 16,
    fontFamily: "Rubik",
    marginBottom: 35,
    padding: 15,
    textAlign: "center"
  },
  viewInput: {
    marginBottom: 5,
  },
  field: {
    borderColor: "#7DA74D",
    borderWidth: 1.2,
    alignSelf: "stretch",
    marginBottom: 20,
    borderRadius: 8,
    height: 55,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'row',
    width: 300,
  },
  input: {
    fontFamily: "Rubik",
    fontSize: 18,
    flex: 1,
    height: '80%',
    placeholderTextColor: "#7DA74D",
    paddingHorizontal: 13,
    maxWidth: 250,
    paddingLeft:20
  },
  placeholder:{
    color:"#7DA74D",
    fontFamily: "Rubik",
    fontSize:18
  },  
  icon: {
    width: 40,
    height: 50,
    textAlign: 'center',
    lineHeight: 50
  },
  inputError:{
    borderColor:'#dc3545'
  },
  button: {
    fontFamily: "Rubik",
    backgroundColor: "#7DA74D",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: '20%',
    width: 300,
    borderRadius: 50,
    marginTop: 40,
    elevation: 3
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  errorlogin:{
    fontSize:18,
    color:"red",
  },
  signUp: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#CEDC39",
    borderRadius: 50,
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
    marginBottom: 20
  },
  signUpText: {
    color: "#7DA74D",
    fontWeight: '400',
  },
  info: {
    color: "#000",
    marginVertical: 15,
    opacity: 0.6,
    textAlign: "center",
  },
});