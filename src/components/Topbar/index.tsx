
import './index.scss';
import  DocsIcon from "../../assets/DocsIcon.png";


export default function Topbar({photoURL}:TopbarProps){
    return (

        <div className="top-bar">
            <div className="topbar-left">
            <img className="docs-icon"src={DocsIcon}/>
            <p className="top-title"> Docs</p>
        </div>
      <img className = "top-image" src={photoURL}  />
         </div>
    );  
    
} 