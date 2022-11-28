import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpBc8ZMxpKNKRmAl4ePLNUBIkoecq9AjY",
  authDomain: "react--clone-op.firebaseapp.com",
  projectId: "react--clone-op",
  storageBucket: "react--clone-op.appspot.com",
  messagingSenderId: "618289293024",
  appId: "1:618289293024:web:697ef7b353154a31ead285"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const db= getFirestore(app);

export {auth,provider};