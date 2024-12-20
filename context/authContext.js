import { useContext } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";




export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const[user,setUser]=useState(null);
    const[isAuthenticated,setIsAuthenticated]=useState(undefined);


    useEffect(()=>{
        //on authstae change

        setTimeout(()=>{
            setIsAuthenticated(true);

        },3000);

    },[])

    const login= async(email,password)=>{
        try{

        }catch(e){
            
        }
    }
    const logout= async()=>{
        try{

        }catch(e){
            
        }
    }

    const register= async(email,password,username,profileUrl)=>{
        try{

        }catch(e){
            
        }
    }

    return(
        <AuthContext.Provider value={{user,isAuthenticated,login, register,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    const value=useContext(AuthContext);

    if(!value){
        throw new Error('useAuth must be wrapped inside AuthContex Provider');
    }
    return value;
}