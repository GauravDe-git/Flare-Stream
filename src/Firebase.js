// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBs06O3gw-de6g67WwNDWS9dppKM44j0s",
  authDomain: "flare-stream-6e18f.firebaseapp.com",
  projectId: "flare-stream-6e18f",
  storageBucket: "flare-stream-6e18f.appspot.com",
  messagingSenderId: "217107725958",
  appId: "1:217107725958:web:b0a06755ccd6ac0b4f9b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);