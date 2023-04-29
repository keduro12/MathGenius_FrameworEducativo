import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHrTbM4B5GS0flxMQJ2ckFVhaiqX6vaOg",
  authDomain: "mathgeniu-framework.firebaseapp.com",
  projectId: "mathgeniu-framework",
  storageBucket: "mathgeniu-framework.appspot.com",
  messagingSenderId: "205962127822",
  appId: "1:205962127822:web:20721c260dadeba086a39f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app);

export {auth,db, storage}