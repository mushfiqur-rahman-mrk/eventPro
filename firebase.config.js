// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY9mlgSA-Jomadqr_x1KbcN20S626YDM0",
  authDomain: "eventpro-91b60.firebaseapp.com",
  projectId: "eventpro-91b60",
  storageBucket: "eventpro-91b60.appspot.com",
  messagingSenderId: "505912826774",
  appId: "1:505912826774:web:8c50c61b6605447d681bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth 