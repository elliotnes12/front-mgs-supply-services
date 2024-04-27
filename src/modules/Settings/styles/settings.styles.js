import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background:{
    height:"100%",
    backgroundColor:"#F3F3F3"
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex:1
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
    height: 50,
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
    backgroundColor: "#7DA74D",
    borderRadius: 50,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20
  },
  dropdownList: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 10,
    maxHeight: 150,
    zIndex: 999,
  },
  singOffText:{
    color:"#fff",
    fontFamily:"Rubik",
    fontWeight:"bold"
  },
  active:{
    borderRadius:28,
    backgroundColor: "#ADD8E6",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
    marginBottom: 20,
  },
  activeText:{
    color:"#000",
    fontSize:16
  }
});
