import { View, Text } from 'react-native'
import React from 'react'

export function UserProfileScreen() {
  return (
    <View  style={{display:'flex',flexDirection:'row',backgroundColor:"#FFF",height:'100%'}}>
    <View style={{ display:'flex',flexDirection:'row',backgroundColor:"#CEDC39", height:'20%',width:'100%',}}>
    <View style={{display:'flex',flexDirection:'column',position:'relative',marginTop:100,marginHorizontal:50,}}>
      <Text style={{fontSize:20,color:"#FFFFFF",fontFamily:'Poppins_700Bold',}}>Create a Service</Text>
      <Text style={{fontSize:15,color:"#FFFFFF",fontFamily:'Poppins_400Regular',}}>schedule a service with us</Text>
    </View>
    <View>
      <Text>Select a service</Text>
    </View>
    </View>
    </View>
  )
}