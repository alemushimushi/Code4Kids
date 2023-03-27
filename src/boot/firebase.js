import { boot } from 'quasar/wrappers'

console.log("firebase boot esta activo");

import firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyDlYJMXlbu2GjJjFZ95vdDVl2aX3S8iaeM",
    authDomain: "code4kids-9a7f2.firebaseapp.com",
    projectId: "code4kids-9a7f2",
    storageBucket: "code4kids-9a7f2.appspot.com",
    messagingSenderId: "207013198397",
    appId: "1:207013198397:web:5e636e33f8a73edc26c854"
  };

// Inicializar app  
firebase.initializeApp(firebaseConfig);
// Variables a exportar
const auth = firebase.auth();
const db = firebase.firestore();
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, marcaTiempo };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
})
