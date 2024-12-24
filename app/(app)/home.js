import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext'
import { Button } from 'react-native-web';

export default function Home() {
  const{logout}=useAuth();
  const handleLogout= async ()=>{
    await logout();

  }

  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={handleLogout}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  )
}