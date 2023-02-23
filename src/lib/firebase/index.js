import { browser } from '$app/environment';
import { initializeApp } from "firebase/app";
import { getAuth , inMemoryPersistence, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhl_JXo7i1qpvsSI0Y0vpgk_nVcqzxSpo",
  authDomain: "dpi-app-a0cb8.firebaseapp.com",
  projectId: "dpi-app-a0cb8",
  storageBucket: "dpi-app-a0cb8.appspot.com",
  messagingSenderId: "176257090828",
  appId: "1:176257090828:web:11a159e25b33e80a01f529",
  measurementId: "G-2X1XP6K70L"
}; 

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth,inMemoryPersistence);

export const db = getFirestore(app);

export const analytics = browser && getAnalytics(app);