// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { initializeAuth,getAuth,createUserWithEmailAndPassword  } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3xwt3cs9rmq_sL3eN379c10xca9MDmHc",
  authDomain: "react-chatto-jos2022.firebaseapp.com",
  projectId: "react-chatto-jos2022",
  storageBucket: "react-chatto-jos2022.appspot.com",
  messagingSenderId: "739049422665",
  appId: "1:739049422665:web:1d0f9665a3b201daaba498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db,auth};