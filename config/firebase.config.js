import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBA1LHCQlD_uSZtavlvVWuBZyhGJ6Z5Oo8",
   authDomain: "random-7fc0e.firebaseapp.com",
   projectId: "random-7fc0e",
   storageBucket: "random-7fc0e.appspot.com",
   messagingSenderId: "721961702949",
   appId: "1:721961702949:web:500588faf7f12caf7191cc"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }