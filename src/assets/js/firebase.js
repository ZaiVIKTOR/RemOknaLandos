// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_p3ldZ_evinKmYID_lthk-ifFEEkGJLM",
  authDomain: "remontokon163-49468.firebaseapp.com",
  projectId: "remontokon163-49468",
  storageBucket: "remontokon163-49468.appspot.com",
  messagingSenderId: "358539785116",
  appId: "1:358539785116:web:e78607b280b72a8e4dce59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;