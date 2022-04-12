// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFwPbtQqBT6IdERo6EqDEUqBrgpXVWkEY",
    authDomain: "genious-car-services-d9dd7.firebaseapp.com",
    projectId: "genious-car-services-d9dd7",
    storageBucket: "genious-car-services-d9dd7.appspot.com",
    messagingSenderId: "602897159903",
    appId: "1:602897159903:web:2702abbba93fce73eabb6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;