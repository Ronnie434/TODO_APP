import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyADS3ehQ2VOYF7RhE6QE9dvrBG7NietQak",
  authDomain: "todoapp-9c20f.firebaseapp.com",
  databaseURL: "https://todoapp-9c20f.firebaseio.com",
  projectId: "todoapp-9c20f",
  storageBucket: "todoapp-9c20f.appspot.com",
  messagingSenderId: "1098917556081",
  appId: "1:1098917556081:web:29414eb8ee50d14ba410d0",
  measurementId: "G-PCHMEPRSVJ"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
