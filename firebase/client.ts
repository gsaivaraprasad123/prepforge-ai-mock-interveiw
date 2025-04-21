import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtJZg8R-X0O-S7C7mfiKcrMcqQo4qWLnk",
  authDomain: "prepforge-6b18b.firebaseapp.com",
  projectId: "prepforge-6b18b",
  storageBucket: "prepforge-6b18b.firebasestorage.app",
  messagingSenderId: "982212545889",
  appId: "1:982212545889:web:1ac77297bba78534d50920",
  measurementId: "G-4RJ92YGE8J"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)