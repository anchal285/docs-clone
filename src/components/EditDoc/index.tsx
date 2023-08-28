import React from "react";
import './index.scss'
import {BiArrowBack} from 'react-icons/bi'

export default function EditDoc({handleEdit}: functioninterface){
    return <div onClick={handleEdit}><BiArrowBack/></div>
}