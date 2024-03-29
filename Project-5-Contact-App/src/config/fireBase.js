// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtSucaweT7NGh4WIbz9H4FeCRLMuqzrng",
  authDomain: "vite-contact-ddca0.firebaseapp.com",
  projectId: "vite-contact-ddca0",
  storageBucket: "vite-contact-ddca0.appspot.com",
  messagingSenderId: "696866916198",
  appId: "1:696866916198:web:154c5404dc0360e7016aa7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
