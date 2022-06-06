import React, { useState, useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import Products from "../components/Products/Products";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const {login} =useContext(AuthContext)
 const handlechange=()=>{
 login()
 }
  
  return (
    <div>
      <input data-cy="login-email" placeholder="Enter Email"/>
      <input data-cy="login-password" placeholder="Enter Password"/>
      <button data-cy="login-submit" onClick={handlechange}>
        Login
      </button >
    </div>
  );
};

export default Login;
