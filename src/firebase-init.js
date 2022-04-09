// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD16Jk01Tf6PxHYmKE2s_jbwU1Jj2WFbpQ",
  authDomain: "router-firebase-integrat-b5cbc.firebaseapp.com",
  projectId: "router-firebase-integrat-b5cbc",
  storageBucket: "router-firebase-integrat-b5cbc.appspot.com",
  messagingSenderId: "685994112946",
  appId: "1:685994112946:web:dd5a581c41db5a317216ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;