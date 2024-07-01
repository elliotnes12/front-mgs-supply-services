

import { View, Spinner, Heading } from 'native-base'


export function LoadingScreen() {
  return (
     <View style={{flex:1,height:"100%",justifyContent:"center",alignItems:"center"}}>
         <Spinner style={{textAlign:"center"}} color={"#7DA74D"} size="lg" />
         <Heading style={{textAlign:"center"}} color={"#7DA74D"} fontSize={"md"}  marginTop={2} >
              Loading
         </Heading>
     </View>
  )
}
