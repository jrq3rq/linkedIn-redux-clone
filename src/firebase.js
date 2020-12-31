import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC64Dw3z40kJvc7POJ7Rij8c8QUKIQY2dk",
  authDomain: "linkedin-clone-bfae2.firebaseapp.com",
  projectId: "linkedin-clone-bfae2",
  storageBucket: "linkedin-clone-bfae2.appspot.com",
  messagingSenderId: "914284636819",
  appId: "1:914284636819:web:232fae04625f7514fc7b66",
  measurementId: "G-52PMHS01JM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
