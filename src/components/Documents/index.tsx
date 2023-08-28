import React from "react";
import "./index.scss";
import Topbar from "../Topbar";
import CreateDoc from "../createDoc";
export default function Document({photoURL}:TopbarProps){
    return <div>
      <Topbar photoURL= {photoURL}/> 
      <CreateDoc/>
        </div>
}