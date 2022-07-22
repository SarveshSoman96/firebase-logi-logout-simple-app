// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAGN6VJBqHHcuFpRP9NE3bzZZRQIROKqcM",
  authDomain: "fir-auth-demo-84c94.firebaseapp.com",
  projectId: "fir-auth-demo-84c94",
  storageBucket: "fir-auth-demo-84c94.appspot.com",
  messagingSenderId: "236972738321",
  appId: "1:236972738321:web:487d877aa5a4c1aa1b2eb0",
  measurementId: "G-5VBXZ7E99X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();