import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import ChatRoomHeader from '../../components/ChatRoomHeader';

export default function ChatRoom() {
  const item=useLocalSearchParams();
  const router=useRouter();
  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='dark'/>
      <ChatRoomHeader user={item} router={router}/>
      
    </View>
  )
}