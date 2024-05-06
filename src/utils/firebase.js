// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogs-421907.firebaseapp.com",
  projectId: "blogs-421907",
  storageBucket: "blogs-421907.appspot.com",
  messagingSenderId: "921539231602",
  appId: "1:921539231602:web:61cc8e1d60abaaaafee7eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);