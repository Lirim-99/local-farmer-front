// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhiNsIxL3LhdunAGEBA4m1_uMGf2nbr2E",
  authDomain: "farmer-verify.firebaseapp.com",
  projectId: "farmer-verify",
  storageBucket: "farmer-verify.appspot.com",
  messagingSenderId: "257389080301",
  appId: "1:257389080301:web:4474e2f0ed91acf03566e4",
  measurementId: "G-K0M2GK43WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;