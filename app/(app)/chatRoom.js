import { View, Text, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import ChatRoomHeader from '../../components/ChatRoomHeader';
import MessageList from '../../components/MessageList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import CustomKeyboardView from '../../components/CustomKeyboardView';
import { getRoomId } from '../../utils/comman';
import { addDoc, collection, doc, onSnapshot, orderBy, query, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';

export default function ChatRoom() {
  const item=useLocalSearchParams();
  const { user } = useAuth(); // Logged-in user
  const router=useRouter();
  const[messages,setMessages]=useState([]);
  const textRef=useRef('');
  const inputRef=useRef(null);
  useEffect(() => {
    createRoomIfNoExits();

    let roomId=getRoomId(user?.userId,item?.userId);
    const docRef=doc(db,'rooms',roomId);
    const messagesRef=collection(docRef,"messages");
    const q= query(messagesRef,orderBy('createdAt','asc'));

    let unsub= onSnapshot(q,(snapshot)=>{
      let allMessages= snapshot.docs.map(doc=>{
        return doc.data();
      });
      setMessages([...allMessages]);

    });
    return unsub;
  }, []);

  const createRoomIfNoExits = async () => {
    // Generate room ID
    let roomId = getRoomId(user?.userId, item?.userId);
    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  const handleSendMessage= async()=>{
    let message=textRef.current.trim();
    if(!message) return;
    try{
      let roomId=getRoomId(user?.userId,item?.userId);
      const docRef=doc(db,'rooms',roomId);
      const messagesRef=collection(docRef,"messages");
      textRef.current='';
      if(inputRef) inputRef?.current?.clear();

      const newDoc=await addDoc(messagesRef,{
        userId:user?.userId,
        text:message,
        profileUrl:user?.profileUrl,
        senderName:user?.username,
        createdAt:Timestamp.fromDate(new Date())
      });

      console.log('new message id',newDoc.id);

    }catch(err){
      Alert.alert('Message',err.message);
    }

  }
  
  return (
    <CustomKeyboardView inChat={true}>
    <View className='flex-1 bg-white'>
      <StatusBar style='dark'/>
      <ChatRoomHeader user={item} router={router}/>
      <View className='h-3 border-b border-neutral-300'/>
      <View className='flex-1 justify-between bg-neutral-100 overflow-visible'>
        <View className='flex-1 '>
          <MessageList
            messages={messages}

            />
        </View>
        <View style={{marginBottom:hp(2.7)}} className='pt-2 '>
          
            <View className='flex-row mx-3 justify-between bg-white  boeder p-2 border-neutral-300 rounded-full pl-5'>
              <TextInput
                ref={inputRef}
                onChangeText={value=>textRef.current=value}
                placeholder='Type message...'
                style={{fontSize:hp(2)}}
                className='flex-1 mr-2'
                />

                <TouchableOpacity onPress={handleSendMessage} className='bg-neutral-200 p-2 mr-[1px] rounded-full'>
                  <Feather name='send'size={hp(2.7)}color='#737373'/>
                </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
      </CustomKeyboardView>
      
   
  )
}