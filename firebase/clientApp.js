import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with config
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    // apiKey: "AIzaSyDjDgjQhBLSONb0kRxPibkewybHDksHWA0",
    // authDomain: "localtome-f84e5.firebaseapp.com",
    // projectId: "localtome-f84e5",
    // storageBucket: "localtome-f84e5.appspot.com",
    // messagingSenderId: "886484471443",
    // appId: "1:886484471443:web:81a4da1d15ecd720f54766",

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// export const auth = app.auth();
export { db };
export { app }

