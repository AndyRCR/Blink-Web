import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDi_3aOxCA3Bh7x3jr6_7CcyLeQaitVrRE",
    authDomain: "blink-c0eb7.firebaseapp.com",
    projectId: "blink-c0eb7",
    storageBucket: "blink-c0eb7.appspot.com",
    messagingSenderId: "781225747772",
    appId: "1:781225747772:web:cd170a882416e7dcafaa39"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)