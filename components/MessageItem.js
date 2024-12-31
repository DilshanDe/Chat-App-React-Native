import { View, Text } from 'react-native'
import React from 'react'

export default function MessageItem({message,currentUser}) {
 if(currentUser?.userId==message?.userId){
    //my message
    return(
        <View></View>
    )
 }
}