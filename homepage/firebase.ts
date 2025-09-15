// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDonhFElofLI2EVlldX0xFfC4lx9QG4mwE",
  authDomain: "fussball-cae26.firebaseapp.com",
  projectId: "fussball-cae26",
  storageBucket: "fussball-cae26.firebasestorage.app",
  messagingSenderId: "611687059097",
  appId: "1:611687059097:web:a3ebf74ab4833260ebf208",
  measurementId: "G-E6QS8ND8BH"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);