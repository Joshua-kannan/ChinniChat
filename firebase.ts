import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtq_rlDEXjJkhtNqFarC5f0Q4pRtfdNxU",
    authDomain: "fir-realtime-chat-chinni.firebaseapp.com",
    projectId: "firebase-realtime-chat-chinni",
    storageBucket: "firebase-realtime-chat-chinni.appspot.com",
    messagingSenderId: "719171445797",
    appId: "1:719171445797:web:37f53180264763a1a50bcc"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 