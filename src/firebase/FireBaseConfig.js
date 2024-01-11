
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCaOVz1Q7S6LYonA6AKYWGBi9nQQLdZFyw",
    authDomain: "larente-31a5b.firebaseapp.com",
    projectId: "larente-31a5b",
    storageBucket: "larente-31a5b.appspot.com",
    messagingSenderId: "922387554221",
    appId: "1:922387554221:web:5336edbe43d21f2cb38b24",
    measurementId: "G-47ZKP746SC"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const analytics = getAnalytics(app);