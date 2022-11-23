import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'apiKeyHere',
  authDomain: 'house-marketplace-app.com',
  projectId: 'house-marketplace-app',
  storageBucket: 'storagebucket',
  messagingSenderId: 'senderId',
  appId: 'appid',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
