// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqqWMqsFKJoqX-0IVV3sxM-SMcxIKUFEI",
  authDomain: "spiro-876e2.firebaseapp.com",
  projectId: "spiro-876e2",
  storageBucket: "spiro-876e2.appspot.com",
  messagingSenderId: "469833166746",
  appId: "1:469833166746:web:32abe0d515776cd57cd423",
  measurementId: "G-K1MC8GYGR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
