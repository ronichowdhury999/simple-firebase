// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7nU7Uml5oiz-dk3QtHz3YR7hZk01R9y4",
    authDomain: "simple-firebase-3803c.firebaseapp.com",
    projectId: "simple-firebase-3803c",
    storageBucket: "simple-firebase-3803c.appspot.com",
    messagingSenderId: "496248390535",
    appId: "1:496248390535:web:39c3c0a4d905b5ac994922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)