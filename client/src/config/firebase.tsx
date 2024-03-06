import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

export const actionCodeSettings = {
  url: "http://localhost:5173"
}

const firebaseConfig = {
  apiKey: "AIzaSyC8XgkTxutB7MYeAwhHiLK77fF4-zrYVbQ",
  authDomain: "rocketryboard-9eddb.firebaseapp.com",
  projectId: "rocketryboard-9eddb",
  storageBucket: "rocketryboard-9eddb.appspot.com",
  messagingSenderId: "886335447812",
  appId: "1:886335447812:web:34313f3bfa9ea362132651",
  measurementId: "G-6RXF0GQ6JS"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export const auth = getAuth(app);
export const gProvider = new GoogleAuthProvider

export const entriesRef = collection(db, "entries");


