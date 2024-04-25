import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  containerImg:{
    width:140,
    height:140,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20,
    marginTop:20
  },
  imgProfile: {
    width: 140,
    height: 140,
    backgroundColor: "#CCC",
    borderRadius:70,
    overflow:"hidden",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  camera: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(206, 220, 57, 0.8)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",  
    bottom:0,
    right:0,
    position:"absolute"
  },
  img:{
    width:"100%",
    height:"100%"
  },
  field: {
    borderColor: "#7DA74D",
    borderWidth: 1,
    alignSelf: "stretch",
    marginBottom: 20,
    borderRadius: 18,
    height: 45,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'row',
    width: 300,
    overflow:"hidden"
  },
  input: {
    fontFamily: "Rubik",
    fontSize: 18,
    flex: 1,
    height: '80%',
    placeholderTextColor: "#7DA74D",
    paddingHorizontal: 13,
    maxWidth: 250,
    paddingLeft:20,
  },
  icon:{
    height:"100%",
    width:50,
    backgroundColor:"rgba(125, 167, 77, 1)",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff"
  },
  singOff:{
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
  }
});
