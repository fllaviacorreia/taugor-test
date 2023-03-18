import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || "mock_key",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || "mock_key",
  projectId: process.env.REACT_APP_PROJECT_ID || "mock_key",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "mock_key",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "mock_key",
  appId: process.env.REACT_APP_APP_ID || "mock_key",
  measurementId: process.env.REACT_APP_MESASUREMENT_ID || "mock_key",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
