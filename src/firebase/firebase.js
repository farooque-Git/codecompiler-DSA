import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0lfaguie6x15t5A2I5Rt56grs7ejIdVI",
  authDomain: "dsa-sheet-bedb2.firebaseapp.com",
  projectId: "dsa-sheet-bedb2",
  storageBucket: "dsa-sheet-bedb2.appspot.com",
  messagingSenderId: "507815577452",
  appId: "1:507815577452:web:f23ff3b6b086a3300dd549",
  measurementId: "G-X41B2KYZFC",
};

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export default auth;
