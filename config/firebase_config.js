// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pearl-6eadb.firebaseapp.com",
  projectId: "pearl-6eadb",
  storageBucket: "pearl-6eadb.firebasestorage.app",
  messagingSenderId: "496387264885",
  appId: "1:496387264885:web:916a71b264bae13bb6033c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)