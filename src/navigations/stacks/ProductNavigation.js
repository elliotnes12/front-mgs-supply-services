import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from "../../utils";
import { styles } from "../Styles.style";
import { ProductScreen } from '../../modules/product/screens/ProductScreen';

const Stack =  createNativeStackNavigator();



export function ProductNavigation() {
  return (
    <Stack.Navigator screenOptions={
        {
          ...styles.stackNavigationStyles
        }
     }>

      <Stack.Screen
        name={screens.tab.products.productScreen}
        component={ProductScreen}
        options={{headerShown:false}}
      />


    </Stack.Navigator>
  )
}