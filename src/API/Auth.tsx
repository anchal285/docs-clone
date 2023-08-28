import {auth} from "../firebaseconfig";

import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

let provider = new GoogleAuthProvider();
export const loginwithgoogle =()=>{
    signInWithPopup(auth,provider);
    
};
