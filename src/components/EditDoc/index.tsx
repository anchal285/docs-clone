import React,{useState,useRef, useEffect} from "react";
import './index.scss'
import {BiArrowBack} from 'react-icons/bi'
import ReactQuill from 'react-quill';
import EditorToolbar, {modules,formats} from "../../Toolbar";
import {CreateDoc} from "../../API/firestore";
export default function EditDoc({handleEdit}: functioninterface){
    let quillRef= useRef<any>(null);
    const [value, setValue] = useState('');

    function addDocData(){
        //let payload ={
         //   value,
       // };
       // CreateDoc(payload)
    }
    
    useEffect(()=>{
      quillRef.current.focus();
    },[])
    return (
     <div >
        <BiArrowBack onClick={handleEdit} size={30} className="react-icon"/>
        <div  className="quil-container">
            <EditorToolbar/>
        <ReactQuill className="react-quill"
        theme="snow"
        ref={quillRef}
         value={value} 
         onChange={setValue} 
         modules={modules}
         formats={formats}/>

        </div>
        </div>
    )
} 