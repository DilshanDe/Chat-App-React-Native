import { View, Text, Pressable, StatusBar, ActivityIndicator } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Loading from '../../components/Loading';
import ChatList from '../../components/ChatList';

export default function Home() {
  const{logout,user}=useAuth();
  const[sers,setUsers]=([1,2,3]);
  const getUsers=async()=>{
    //fetach users

  }
  

  return (
    <View className='flex-1 bg-white'>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {
        users.length>0?(
          <ChatList users={users}/>

        ):(
          <View className='flex items-center' style={{top:hp(30)}}>
              <ActivityIndicator size='large'/>

           {/*<Loading size={hp(10)}/>*/}

            </View>
        )
      }
      
      
      
    </View>
  )
}