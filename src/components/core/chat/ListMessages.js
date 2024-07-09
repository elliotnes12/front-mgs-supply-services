
import React, { useRef } from 'react'
import {styles} from "../styles/ListMessages.styles";
import { ScrollView } from 'react-native';
import {Text, View} from  "native-base";
import {map} from "lodash";
import { ItemText } from './ItemText';
export  function ListMessages({messages}) {

  console.log(messages)
  const ScrollViewRef = useRef()
  return (
    <ScrollView style={styles.container} 
    alwaysBounceVertical={false}
    ref={ScrollViewRef}
    onContentSizeChange={() =>{
        ScrollViewRef.current.scrollToEnd({animated:true});
    }}
    >
       <View styles={styles.content}>
          {map(messages,(message,id) =>{

              if(message.type == 'TEXT'){
                return <ItemText  key={message.id} message={message} />
              }
              if(messsage.type == 'IMAGE'){
                return <Text key={message.id} >IMAGE</Text>
              }
             
          })}
       </View>
    </ScrollView>
  )
}
