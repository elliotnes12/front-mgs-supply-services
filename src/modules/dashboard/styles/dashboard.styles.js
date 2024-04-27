import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background:{
    height:"100%",
    backgroundColor:"rgba(243, 243, 243, 1)"
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding:25,
    flex:1
  },
  btnNewTask:{
    backgroundColor:"rgba(206, 220, 57, 1)",
    width:157,
    height:62,
    flexDirection:"row",
    alignItems:"center",
    borderRadius:40,
    paddingLeft:20,
  },
  taskIcon:{
    height:50,
    width:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgba(240, 240, 240, 1)",
    borderRadius:25,
    marginRight:10,
    borderWidth:2,
    borderColor:"#fff"
  },
  labelNewTask:{
    fontWeight:"500",
    fontFamily:"Rubik"
  },
  header:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%"
  },
  profile:{
    height:62,
    flexDirection:"row",
    alignItems:"center",
  },
  alerts:{
    height:50,
    width:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgba(240, 240, 240, 1)",
    borderRadius:25,
    marginRight:10,
    borderWidth:4,
    borderColor:"#fff",
    padding:15
  },
  goProfile:{
    height:56,
    width:56,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:28,
    marginRight:10,
    overflow:"hidden",
    borderWidth:4,
    borderColor:"#fff"
  },
  welcome:{
    marginTop:30
  },
  greetings:{
    fontSize:28,
    width:200,
    color:"rgba(121, 121, 129, 1)",
    paddingLeft:10
  },
  news:{
    padding:10,
    marginTop:30
  },
  headerNews:{
    flexDirection:"row",
    alignItems:"center"
  },
  btnNewsActive:{
    backgroundColor:"rgba(125, 167, 77, 1)",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    width:141,
    borderRadius:25
  },
  textNews:{
    color:"rgba(31, 31, 33, 1)"
  },
  btnNews:{
    backgroundColor:"rgba(250, 250, 250, 1)",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    width:80,
    borderRadius:25,
    borderWidth:2,
    borderColor:"#fff",
    marginLeft:15
  },
  textNewsActive:{
    color:"#fff"
  }
  
});
