// En tu archivo de ProfileForm.styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewInput: {
    marginBottom: 5,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 19
  },
  // Estilo de los inputs
  field: {
    borderColor: "white",
    borderWidth: 1.2,
    alignSelf: "stretch",
    marginBottom: 20,
    marginLeft: 10,
    borderRadius: 30,
    height: 55,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'row',
    width: 370,
    backgroundColor: "#F8F8F8"
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
  titleBox:{
    width:'auto',
    height:'auto',
    paddingHorizontal:2,
    paddingVertical: 0.5,
    backgroundColor:'#FFFFFF',
    position:'absolute',
    justifyContent:'center',
  },
  placeholder:{
    color:"#7DA74D",
    fontFamily: "Rubik",
    fontSize:18
  },  
  icon: {
    width: 40,
    height: 50,
    textAlign: 'right',
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
  }
});
