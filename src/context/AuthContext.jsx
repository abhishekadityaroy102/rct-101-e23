import React, { createContext } from "react";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setisAuth]=useState(false);
  const navigate=useNavigate();
  const login=()=>{
    setisAuth(true);
    navigate('/products')
  }
  function logout(){
    setisAuth(false);
    navigate("/login")
  }
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
