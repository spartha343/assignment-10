// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqdV_F7cNQVVMiwzo1x4GOf_KVclwFHBg",
    authDomain: "partha-react-app.firebaseapp.com",
    projectId: "partha-react-app",
    storageBucket: "partha-react-app.appspot.com",
    messagingSenderId: "817568743565",
    appId: "1:817568743565:web:e2a9462bebd22a425262c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;