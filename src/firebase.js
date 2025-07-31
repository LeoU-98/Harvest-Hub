import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk4HF8bZHtLrpwyhTmddaZIfZdjyOhyjc",
  authDomain: "harvest-hub-1e34a.firebaseapp.com",
  projectId: "harvest-hub-1e34a",
  storageBucket: "harvest-hub-1e34a.firebasestorage.app",
  messagingSenderId: "177424197377",
  appId: "1:177424197377:web:990486a03e365a7b75dd00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
