// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDtmj_wmamIdVlNuNpb0JDIhtWXT6kGTGA",
  authDomain: "clone-22906.firebaseapp.com",
  projectId: "clone-22906",
  storageBucket: "clone-22906.appspot.com",
  messagingSenderId: "376334165729",
  appId: "1:376334165729:web:d920c4be2aba319d7eb9a0",
  measurementId: "G-Q1QJWQ0QDQ"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };