import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBJb6fVBqHt-F-Yf5QGC6suANjSRvN6g6k",
  authDomain: "squashcode-db38b.firebaseapp.com",
  projectId: "squashcode-db38b",
  storageBucket: "squashcode-db38b.firebasestorage.app",
  messagingSenderId: "605504774601",
  appId: "1:605504774601:web:48676dc8d407088c218818",
  measurementId: "G-73461BCHTS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Export phone auth helpers
export { RecaptchaVerifier, signInWithPhoneNumber };
