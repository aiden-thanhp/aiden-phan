import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: object = {
    apiKey: "AIzaSyDyThAgpZiFsuaH2UmW1WFdr2R79zPVHHg",
    authDomain: "my-portfolio-e5e88.firebaseapp.com",
    projectId: "my-portfolio-e5e88",
    storageBucket: "my-portfolio-e5e88.appspot.com",
    messagingSenderId: "212829739198",
    appId: "1:212829739198:web:d511c9c4fb068be9dde6ef",
    measurementId: "G-KJ31CBH7XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);