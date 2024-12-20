import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, useSegments } from 'expo-router';
import '../global.css';
import { AuthContextProvider, useAuth } from '../context/authContext';

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    // Check if user is authenticated or not
    if(typeof isAuthenticated=='undefined')return;
    const inApp=  segments[0]=='(app)';
    if(isAuthenticated && !inApp){
        
    }
    [isAuthenticated];
  }, [isAuthenticated]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
