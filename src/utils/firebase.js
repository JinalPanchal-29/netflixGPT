
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBRtVm9ziTDxOvWRglG_tRQ14P_gqmRwHE",
    authDomain: "netflixgpt-b4f44.firebaseapp.com",
    projectId: "netflixgpt-b4f44",
    storageBucket: "netflixgpt-b4f44.firebasestorage.app",
    messagingSenderId: "710144931624",
    appId: "1:710144931624:web:ab5ae7f887f9d70d46c21d",
    measurementId: "G-7L1KFT0ZF9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()