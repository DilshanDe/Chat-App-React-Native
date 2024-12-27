import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ChatItem({item}) {
  return (
   <TouchableOpacity>
    <Image
      source={require('../assets/images/avatar.png')}style={{height:hp(6),aspectRatio:1}}/>
   </TouchableOpacity>
  )
}