import { StyleSheet } from "react-native";


export const styled = (type) =>{

    return new StyleSheet.create({
           icon:{
              with:42,
              height:42,
              borderRadius:21,
              background: type == 'info'? 'red': 'blue'
           }
    });
}