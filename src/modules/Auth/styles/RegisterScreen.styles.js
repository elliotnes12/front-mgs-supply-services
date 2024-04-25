import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({


  title:{
    fontFamily: "Rubik",
    fontSize:28,
    color:"#7DA74D",
    marginBottom:15,
    marginTop:35
  },
  register: {
    color: "#0891b2",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 30,
  },
  btnLogin: {
    fontFamily: "Rubik",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#CEDC39",
    borderRadius: 50,
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30
  },
  btnLoginText:{
    color:"#7DA74D",
  }, 
  container:{
    flex:0,
    justifyContent:"center",
    alignItems:"center"
  },
  viewInput: {
    marginBottom: 5,
  },
  field: {
    borderColor: "#7DA74D",
    borderWidth: 1.2,
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
  label:{
    color:"#000",
    fontFamily: "Rubik",
    fontSize:18
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#7DA74D",
    width: "50%",
    marginVertical: 20, 
  },
});