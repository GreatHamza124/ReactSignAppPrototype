import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA6A7J7sB3vhyTdFA9wGceT0tgg0CbKxQ",
    authDomain: "reactsignapp.firebaseapp.com",
    projectId: "reactsignapp",
    storageBucket: "reactsignapp.firebasestorage.app",
    messagingSenderId: "969206673696",
    appId: "1:969206673696:web:44d0678dba4c0a241c6745"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, collection, addDoc, getDocs  };
