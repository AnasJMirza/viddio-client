// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCFA22rkrNWBDDC62HiM-6sI-U-J46Oiv8",
  authDomain: "clone-mern-a87de.firebaseapp.com",
  projectId: "clone-mern-a87de",
  storageBucket: "clone-mern-a87de.appspot.com",
  messagingSenderId: "1034385935269",
  appId: "1:1034385935269:web:020daef6b625fd8659764c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;