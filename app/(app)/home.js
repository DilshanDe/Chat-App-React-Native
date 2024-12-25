import { View, Text, Pressable, StatusBar } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext'
import { Button } from 'react-native-web';

export default function Home() {
  const{logout,user}=useAuth();
  const handleLogout= async ()=>{
    await logout();

  }
  console.log('user data: ',user);

  return (
    <View className='flex-1 bg-white'>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <Text>Home</Text>
      <Pressable onPress={handleLogout}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  )
}