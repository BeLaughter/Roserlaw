// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0m3Gp6IsTyf964bM1qwvbt5MatJcdy_8",
  authDomain: "roserlaw-b2538.firebaseapp.com",
  databaseURL: "https://roserlaw-b2538-default-rtdb.firebaseio.com",
  projectId: "roserlaw-b2538",
  storageBucket: "roserlaw-b2538.firebasestorage.app",
  messagingSenderId: "956321546216",
  appId: "1:956321546216:web:2756da2f7137ac16c3ee5d",
  measurementId: "G-FGBTH2BWCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { auth, db };
