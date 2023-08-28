import React,{useState} from "react";
import "./index.scss";
import addDoc from '../../assets/addDoc.png'
import EditDoc from "../EditDoc";
export default function CreateDoc (){
    const[isEdit, setIsEdit] = useState(false);
    const handleEdit  =()=>{
        setIsEdit(!isEdit)
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
        
