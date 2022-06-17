// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-UUlWmbceegKn_pmkMqx47Mbr5BzIck0",
  authDomain: "cryptomarket-cacciavillani.firebaseapp.com",
  projectId: "cryptomarket-cacciavillani",
  storageBucket: "cryptomarket-cacciavillani.appspot.com",
  messagingSenderId: "59636330708",
  appId: "1:59636330708:web:b8c99185f2c5136f70cb41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore intialize
const db = getFirestore(app);

export default db;
