import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext'
import { Button } from 'react-native-web';

export default function Home() {
  const{logout}=useAuth();
  return (
    <View>
      <Text>Home</Text>
      <Button title=' Sign Out'/>
    </View>
  )
}