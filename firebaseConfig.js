import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiMNCAKCsi4TLJhWz6m7QrxZ2YgVJtkSo",
    authDomain: "my-projeto-5e51b.firebaseapp.com",
    projectId: "my-projeto-5e51b",
    storageBucket: "my-projeto-5e51b.appspot.com",
    messagingSenderId: "846556801781",
    appId: "1:846556801781:web:b2a4a4f8937ef4bb1433bc",
    measurementId: "G-1S6BDRQ99T"
  };    

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  export {auth}