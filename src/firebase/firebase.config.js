import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBob-g5lEqlg9Z9qBRZDDZjT75RScPnNQI",
//   authDomain: "redux-todo-93d12.firebaseapp.com",
//   projectId: "redux-todo-93d12",
//   storageBucket: "redux-todo-93d12.appspot.com",
//   messagingSenderId: "642278945899",
//   appId: "1:642278945899:web:919e842f6417396ddced2e"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);