// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf95zgVetVfW6sM0Wa4Yk6LIKnJA4HfZA",
  authDomain: "ai-trip-planner-c543a.firebaseapp.com",
  projectId: "ai-trip-planner-c543a",
  storageBucket: "ai-trip-planner-c543a.firebasestorage.app",
  messagingSenderId: "911106951779",
  appId: "1:911106951779:web:b9a4356a6cdf059dcf4656",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
