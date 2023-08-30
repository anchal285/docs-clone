import React,{useState,useEffect} from "react";
import "./index.scss";
import addDoc from '../../assets/addDoc.png'
import EditDoc from "../EditDoc";
import { CreateDoc } from "../../API/firestore";

export default function CreateDoc (){
    const[isEdit, setIsEdit] = useState(false);
    const handleEdit  =()=>{
        setIsEdit(!isEdit)
    
   
        let payload = {
            value:"",
        };
         CreateDoc(payload);
    };
        
    if(isEdit) return <EditDoc handleEdit = {handleEdit}/>;
    return (
    <div className="new-doc-container">
        <div className="new-doc-inner">
        <p>Start a new document </p>
        <img className="start-doc"src={addDoc} onClick={handleEdit} />
        
            <p className="title">Blank</p>
        </div>
        </div>
    );
}
        
