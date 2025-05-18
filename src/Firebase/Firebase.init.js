// DO NOT SHARE IT
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcIqdLpi8NWUHXfypHIN1rh03V64DnjUE",
  authDomain: "simple-firebase-auth2-ff23e.firebaseapp.com",
  projectId: "simple-firebase-auth2-ff23e",
  storageBucket: "simple-firebase-auth2-ff23e.firebasestorage.app",
  messagingSenderId: "133193215040",
  appId: "1:133193215040:web:015766e5931a0e613ac3a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);