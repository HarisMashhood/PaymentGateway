// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBE1HI1vRAVZsl8kGED7b44lUoXILCXNQ0",
    authDomain: "unsung-project.firebaseapp.com",
    projectId: "unsung-project",
    storageBucket: "unsung-project.appspot.com",
    messagingSenderId: "360398863367",
    appId: "1:360398863367:web:94d8ea3ad1dbff085c3ea2",
    measurementId: "G-7KSBFSJCQY"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();// this is variable used in signing in and all.

export{db, auth};