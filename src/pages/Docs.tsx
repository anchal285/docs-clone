import React from "react";
import ModalComponent from "../components/Modal";
import {  loginwithgoogle } from "../API/Auth";
import useCheckAuth from "../Hooks/useCheckAuth";
import Topbar from "../components/Topbar";
import Document from "../components/Documents";
const Docs:React.FC =()=>{
    
  const handleLogin = ()=>{
    loginwithgoogle();
  };
  
  let {isAuthenticated,userData} = useCheckAuth();  
  
    return <div className="docs-container">
        {!isAuthenticated ?(
         <ModalComponent title="Login with Google"
        handleLogin={handleLogin}></ModalComponent>)
        :
        <>
        <Document photoURL= {userData.photoURL}/>
        </>
        
        
      }
    </div>;
}
export default Docs; 
