import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { AuthContext } from "../../context/AuthContext";
import styles from "../Products/Products.module.css"
import Login from "../../pages/Login";
const Products = () => {
  const [data1,setdata]=useState([])
  const {isAuth}=useContext(AuthContext)
  
  useEffect(()=>{
    if(isAuth===true){
   axios.get("http://localhost:8080/products").then((res)=>setdata(res.data))
    }
    else{
      return 
    }
  },[])

  return <div className={styles.box}>{
    data1.map((el)=>(<div >
      <h2>{el.name}</h2>
      <p>{el.description}</p>
    </div>))
    }
    </div>;
};

export default Products;
