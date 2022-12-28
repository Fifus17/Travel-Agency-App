import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyDuekJ8EvdJB4Hpj9sNGLGkWYL0ofJkqxA",
    authDomain: "drip-trip-c1c9c.firebaseapp.com",
    databaseURL: "https://drip-trip-c1c9c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "drip-trip-c1c9c",
    storageBucket: "drip-trip-c1c9c.appspot.com",
    messagingSenderId: "691297381529",
    appId: "1:691297381529:web:ec4a94ad5f206a74e81c08",
    measurementId: "G-BL0KVCGSB0"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
