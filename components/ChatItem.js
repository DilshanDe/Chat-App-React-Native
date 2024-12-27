import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ChatItem({item}) {
  return (
   <TouchableOpacity className='flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2 border-b border-b-neutral-200'>
    <Image
      source={require('../assets/images/avatar.png')}
      style={{height:hp(6),aspectRatio:1}}
      className='rounded-full'
      />


      {/*name and last massege*/}
   </TouchableOpacity>
  )
}