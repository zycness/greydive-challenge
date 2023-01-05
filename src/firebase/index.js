import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// setting firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID,
};

// initializing firebase app
const app = initializeApp(firebaseConfig);

// and connecting with the firestore database
export const db = getFirestore(app);
