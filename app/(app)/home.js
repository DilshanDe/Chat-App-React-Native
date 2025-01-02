import { View, Text, Pressable, StatusBar, ActivityIndicator } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/authContext'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Loading from '../../components/Loading';
import ChatList from '../../components/ChatList';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDocs, query, where } from 'firebase/firestore';
import { userRef } from '../../firebaseConfig';

export default function Home() {
  const{logout,user}=useAuth();
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    if(user?.uid)
            getUsers();

  },[])
  const getUsers=async()=>{
    //fetach users
    const q=query(userRef,where('userId','!=',user?.uid));

    const querySnapshot= await getDocs(q);
    let data=[];
    querySnapshot.forEach(doc=>{
      data.push({...doc.data()});
    });

    setUsers(data);

  }
  

  return (
    <View className='flex-1 bg-white'>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {
        users.length>0?(
          <ChatList currentUser={user} users={users}/>

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