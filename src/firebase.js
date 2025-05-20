
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfI1H-rgPoaK3Ua-cHnmVRChwRIl8PyTs",
  authDomain: "launch-week1-firestore.firebaseapp.com",
  projectId: "launch-week1-firestore",
  storageBucket: "launch-week1-firestore.firebasestorage.app",
  messagingSenderId: "69169723441",
  appId: "1:69169723441:web:98d200f244003c1fff3d10",
  measurementId: "G-H30FTY7NJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };