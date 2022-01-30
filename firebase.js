import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "signal-2000f.firebaseapp.com",
  projectId: "signal-2000f",
  storageBucket: "signal-2000f.appspot.com",
  messagingSenderId: "",
  appId: "",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth, firebase };
