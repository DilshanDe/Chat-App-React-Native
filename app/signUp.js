import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';
import { useAuth } from '../context/authContext';

export default function SignUP() {
   const router=useRouter();
   const {register}= useAuth();


   const emailRef=useRef('');
   const passwordRef=useRef('');
   const usernameRef=useRef('');
   const profileRef=useRef('');
   const[loading,setLoading]=useState(false);


   const handleRegister= async()=>{
    if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current){
      Alert.alert('Sign Un',"please fill all the fields.")
      return;
    }
    setLoading(true);

    let response=await register(emailRef.current,passwordRef.current,usernameRef.current,profileRef.current);
    setLoading(false);
   
    console.log('got result:',response);
    if(!response.success){
      Alert.alert('Sign Up',response.msg);
    }

   }
  return (
    <CustomKeyboardView>
      <StatusBar style='dark'/>
      <View style={{paddingTop:hp(7),paddingHorizontal:wp(5)}} className='flex-1 gap-12 '>
        {/*signin image*/}
        <View className='items-center'>
          <Image style={{height:hp(20)}} resizeMode='contain' source={require('../assets/images/register.png')}/>
        </View>



        <View className='gap-10'>
          <Text style={{fontSize:hp(4)}} className='font-bold tracking-wider text-center text-neutral-800'>Sign Up</Text>

          {/*inputs*/}
          <View className='gap-4'>
              <View style={{height:hp(7)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
                <Feather name='user'size={hp(2.7)} color='gray'/>
                  <TextInput
                   onChangeText={value=>usernameRef.current=value} 
                  style={{fontSize:hp(2)}}
                  className='flex-1 font-semibold text-neutral-700'
                  placeholder='Enter your UserName '
                  placeholderTextColor={'gray'}
                  />
              </View>
              
              <View style={{height:hp(7)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
                <Octicons name='mail'size={hp(2.7)} color='gray'/>
                  <TextInput
                   onChangeText={value=>emailRef.current=value} 
                  style={{fontSize:hp(2)}}
                  className='flex-1 font-semibold text-neutral-700'
                  placeholder='Enter your Email '
                  placeholderTextColor={'gray'}
                  />
              </View>
              
                    <View style={{height:hp(7)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
                      <Octicons name='lock'size={hp(2.7)} color='gray'/>
                      <TextInput 
                      onChangeText={value=>passwordRef.current=value}
                      style={{fontSize:hp(2)}}
                      secureTextEntry
                      className='flex-1 font-semibold text-neutral-700'
                      placeholder='Enter your Password '
                      placeholderTextColor={'gray'}
                      />
                </View>
                <View style={{height:hp(7)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
                <Feather name='image'size={hp(2.7)} color='gray'/>
                  <TextInput
                   onChangeText={value=>profileRef.current=value} 
                  style={{fontSize:hp(2)}}
                  className='flex-1 font-semibold text-neutral-700'
                  placeholder='Profile Url '
                  placeholderTextColor={'gray'}
                  />
              </View>
                

              {/*submit button*/}

              <View>
                {
                  loading?(
                    <View className='flex-row justify-center'>
                      <Loading size={hp(8)}/>
                      </View>

                  ):(
                    
                    <TouchableOpacity onPress={handleRegister} style={{height:hp(6.5)}} className='bg-indigo-500 rounded-xl justify-center items-center'>
                    <Text stye={{fontSize:hp(3)}} className='text-white font-bold tracking-wider'>Sign Up</Text>
                  </TouchableOpacity>

                  )

                }
              </View>



              {/*sign up text*/}

              <View className='flex-row justify-center'>
                <Text style={{fontSize:hp(1.8)}} className='font-semibold text-neutral-500'>Already have an account?  </Text>
                <Pressable onPress={()=>router.push('signin')}>
                    <Text style={{fontSize:hp(1.8)}} className='font-bold text-indigo-500'>Sign In</Text>

                </Pressable>
                
              </View>

              


          </View>
          
        </View>
      </View>
      
    </CustomKeyboardView>
  )
}