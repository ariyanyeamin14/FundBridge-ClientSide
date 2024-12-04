// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6BMFU1ThEtP8NZwdYNOBNMjDjwdstmDk",
  authDomain: "fundbridge-6d21f.firebaseapp.com",
  projectId: "fundbridge-6d21f",
  storageBucket: "fundbridge-6d21f.firebasestorage.app",
  messagingSenderId: "271472154418",
  appId: "1:271472154418:web:08b4f6903301227d86292b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);