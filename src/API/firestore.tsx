
import {firestore,auth } from "../firebaseconfig";
import {addDoc, collection} from "firebase/firestore"
let docs = collection(firestore,'docs');

type payloadType = {
    value: string;
}

export const CreateDoc = (playload : payloadType) =>{
  addDoc(docs, {...playload, userName: auth.currentUser?.displayName})
}