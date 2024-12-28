import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function ChatRoomHeader() {
  return (
    <Stack.Screen
        options={{
            title:'',
            headerShadowVisible:false
        }}
        />
  )
}
