// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.RAACT_APP_apiKey ,
  authDomain: process.env.RAACT_APP_authDomain ,
  projectId: process.env.RAACT_APP_projectId ,
  storageBucket: process.env.RAACT_APP_storageBucket ,
  messagingSenderId: process.env.RAACT_APP_messagingSenderId,
  appId: process.env.RAACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app