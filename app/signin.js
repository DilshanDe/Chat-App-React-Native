import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';

export default function SignIn() {
  return (
    <View className='flex-1'>
      <StatusBar style='dark'/>
      <View style={{padding:hp(8),paddingHorizontal:wp(5)}} className='flex-1 gap-12 '>
        {/*signin image*/}
        <View className='items-center'>
          <Image style={{height:hp(25)}} resizeMode='contain' source={require('../assets/images/login.png')}/>
        </View>



        <View className='gap-10'>
          <Text style={{fontSize:hp(4)}} className='font-bold tracking-wider text-center text-neutral-800'>Sign In</Text>

          {/*inputs*/}
          <View style={{height:hp(7)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
            <Octicons name='mail'size={hp(2.7)} color='gray'/>
          </View>
        </View>
      </View>
      
    </View>
  )
}