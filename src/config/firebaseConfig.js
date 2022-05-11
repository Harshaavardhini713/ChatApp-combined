import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDqKanApcRzZFV8aCXtd_Cxmkn7f6DAzGs",
    authDomain: "moonknight-d873f.firebaseapp.com",
    projectId: "moonknight-d873f",
    storageBucket: "moonknight-d873f.appspot.com",
    messagingSenderId: "118973989163",
    appId: "1:118973989163:web:1b29c14b74ef2fc5b7856e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();