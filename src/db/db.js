// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPP4rEW7V7QD27GTgA-yjU3DBFmUSWrDo",
  authDomain: "tabula-rasa-ecommerce.firebaseapp.com",
  projectId: "tabula-rasa-ecommerce",
  storageBucket: "tabula-rasa-ecommerce.firebasestorage.app",
  messagingSenderId: "1082376696783",
  appId: "1:1082376696783:web:623fdb45e75c46912558ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db