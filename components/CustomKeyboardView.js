import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'


const ios=Platform.OS=='ios';

export default function CustomKeyboardView({children}) {
  return (
    <KeyboardAvoidingView
        behavior={ios? 'padding':'height'}
        style={{flex:1}}
    
    >
        <ScrollView>
            {
                children

            }
        </ScrollView>
    </KeyboardAvoidingView>
  )
}