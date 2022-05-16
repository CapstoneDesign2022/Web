import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu9NgyIUpXGj_u2jiXuiaONz-cbIF0JyY",
  authDomain: "sahap-e6c29.firebaseapp.com",
  projectId: "sahap-e6c29",
  storageBucket: "sahap-e6c29.appspot.com",
  messagingSenderId: "883451910732",
  appId: "1:883451910732:web:b4bfa188dc8e863ff672e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);