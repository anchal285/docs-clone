

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDAoc88wKYGYw9DPR2iDJJrBIhQTZ_9usc",
  authDomain: "fir-project-4f3f8.firebaseapp.com",
  projectId: "fir-project-4f3f8",
  storageBucket: "fir-project-4f3f8.appspot.com",
  messagingSenderId: "40300893199",
  appId: "1:40300893199:web:0263a847decf18799d7f7a"
};


export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);