import { useEffect, useState } from "react";
import { createContext } from "react";




export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const[user,setUser]=useState(null);
    const[isAuthenticated,setIsAuthenticated]=useState(undefined);


    useEffect(()=>{
        //on authstae change

    },[])

    const login= async(email,password)=>{
        try{

        }catch(e){
            
        }
    }
}