import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import '../global.css';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { MenuProvider } from 'react-native-popup-menu';

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router= useRouter();

  useEffect(() => {
    // Check if user is authenticated or not
    if(typeof isAuthenticated=='undefined')return;
    const inApp=  segments[0]=='(app)';
    if(isAuthenticated && !inApp){
        //redirect the home
        router.replace('home');

    }else if(isAuthenticated==false){
        //redirect the signing page
        router.replace('signin');
    }
    [isAuthenticated];
  }, [isAuthenticated]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <MenuProvider>
        <AuthContextProvider>
          <MainLayout />
        </AuthContextProvider>

    </MenuProvider>
    
  );
}
