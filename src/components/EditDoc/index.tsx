import React,{useState,useRef, useEffect} from "react";
import './index.scss'
import {BiArrowBack} from 'react-icons/bi'
import ReactQuill from 'react-quill';
import { toolbarOptions } from "../../Toolbar";
export default function EditDoc({handleEdit}: functioninterface){
    let quillRef= useRef<any>(null);
    const [value, setValue] = useState('');
    useEffect(()=>{
      quillRef.current.focus();
    },[])
    return (
     <div >
        <BiArrowBack onClick={handleEdit} size={30} className="react-icon"/>
        <div  className="quil-container">
        <ReactQuill className="react-quill"
        theme="snow"
        ref={quillRef}
         value={value} 
         onChange={setValue} />

        </div>
        </div>
    )
} 