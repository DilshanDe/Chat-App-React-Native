import { View, Text } from 'react-native'
import React from 'react'
import { Slot, useSegments } from "expo-router";

// Import your global CSS file
import "../global.css";
import { useAuth } from '../context/authContext';

const MainLayout=()=>{
    const{isAuthenticated}=useAuth();
    const segments=useSegments();
}

export default Slot;