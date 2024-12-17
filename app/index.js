import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function StartPage() {
  return (
    <View className='flex-1 justify-center'>
      <ActivityIndicator size='large' color="gray"/>
    </View>
  )
}