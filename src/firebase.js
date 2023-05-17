import firebase from "firebase";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyD24EK5xlExMi2rm4QtvJ92Lzr2P8Hlmec",
    authDomain: "hppie-66838.firebaseapp.com",
    projectId: "hppie-66838",
    storageBucket: "hppie-66838.appspot.com",
    messagingSenderId: "753777611130",
    appId: "1:753777611130:web:7b2fd9568ed404bb5846c3",
  })
  .auth();
