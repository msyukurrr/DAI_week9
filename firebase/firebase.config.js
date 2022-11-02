import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCunvAyiaZP2hn-2dEUaJN7wp_lg3O8wpo",
  authDomain: "beee-e8549.firebaseapp.com",
  projectId: "beee-e8549",
  storageBucket: "beee-e8549.appspot.com",
  messagingSenderId: "47066927942",
  appId: "1:47066927942:web:1ebe1685e7c377ec1ecb47",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);