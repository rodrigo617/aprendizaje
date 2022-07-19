// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPB2yDOPodLAFoCdy4MjaCz98XS-66LIU",
    authDomain: "loginapp-b8369.firebaseapp.com",
    projectId: "loginapp-b8369",
    storageBucket: "loginapp-b8369.appspot.com",
    messagingSenderId: "781986131980",
    appId: "1:781986131980:web:3b0ed8bb8e75a73331fe29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)