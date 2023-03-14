// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWWjroWoICtA4KGh4Y6z8Z0XA3uWl5FLE",
  authDomain: "tmu-rec-app.firebaseapp.com",
  projectId: "tmu-rec-app",
  storageBucket: "tmu-rec-app.appspot.com",
  messagingSenderId: "969199083899",
  appId: "1:969199083899:web:10d13a75566f92eca4ddde",
  measurementId: "G-08K10TFS2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {
    auth,
}