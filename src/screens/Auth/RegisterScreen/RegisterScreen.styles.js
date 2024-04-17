import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({

  containerTitle:{
    flex:0,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontFamily: "Rubik",
    fontSize:28,
    color:"#7DA74D",
    marginBottom:15,
    marginTop:35
  },
  gradient:{
    flex:0,
    height:"100%",
    width:"100%",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end"
  },
  content: {
    backgroundColor:"#ffffff",
    flex:0,
    justifyContent:'flex-start',
    alignItems:'center',
    width:"100%",
    minHeight:650,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  register: {
    color: "#0891b2",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 30,
  },
  img: {
    width: 300,
    resizeMode: "contain",
    marginBottom: 5,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
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
  }
});