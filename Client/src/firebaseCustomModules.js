import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBTh2cWOzmY8wqrqeS5y-uuhnzkG115hGE",
  authDomain: "haikoo-bc326.firebaseapp.com",
  databaseURL:
    "https://haikoo-bc326-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "haikoo-bc326",
  storageBucket: "haikoo-bc326.appspot.com",
  messagingSenderId: "784052480580",
  appId: "1:784052480580:web:9a9e5e50cb8df5def9ea11",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID
  ],
};

export {app, db, auth, uiConfig };
