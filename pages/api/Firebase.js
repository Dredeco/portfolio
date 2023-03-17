import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC_IEMuETAVxaBcdvH5FYT7zvla2ozdKo",
  authDomain: "portfolio-e973c.firebaseapp.com",
  projectId: "portfolio-e973c",
  storageBucket: "portfolio-e973c.appspot.com",
  messagingSenderId: "1968385677",
  appId: "1:1968385677:web:ebc335b320776898733cc4",
  measurementId: "G-3QN11R9T1B"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}