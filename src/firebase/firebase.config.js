import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBob-g5lEqlg9Z9qBRZDDZjT75RScPnNQI",
  authDomain: "redux-todo-93d12.firebaseapp.com",
  projectId: "redux-todo-93d12",
  storageBucket: "redux-todo-93d12.appspot.com",
  messagingSenderId: "642278945899",
  appId: "1:642278945899:web:919e842f6417396ddced2e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);