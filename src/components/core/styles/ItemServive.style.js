import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        width: '100%',
        position: 'relative',
        marginBottom: 15,
      },
      item__img: {
        width: 100,
        height: 100,
        marginRight: 20,
      },
      item__text: {
        top: -15,
        paddingTop: 20,
        flex: 1,
      },
      item__title: {
        color:"#0F0F0F",
        fontFamily: 'Poppins_600SemiBold',
      },
      item_subtitle:{
        color:"#0F0F0F",
        fontFamily: 'Poppins_400Regular',
      },
      item__raiting:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:40,
        marginTop:5,
        justifyContent:"space-between",
      },
      item__date:{
        position:"absolute",
        right:0,
        bottom:0,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:130,
      },
      item__datetext:{
        color:"#333",
        fontSize:12,
        marginLeft:5,
      },
    
      item__flechaContainer: {
        width: 24,
        height: 24,
        marginRight: 20,
        position: 'absolute',
        right: 0,
        top: '50%',
      },
      item__ratingContainer: {
        width: 24,
        height: 24,
        marginRight: 20,
        position: 'relative',
        left: 15,
        bottom: '15%',
      },
      
});