import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDSMtIgfrZ6GKS2sm9DW0EV5e3jnEIM7U4",
    authDomain: "ipzproject-f08c1.firebaseapp.com",
    projectId: "ipzproject-f08c1",
    storageBucket: "ipzproject-f08c1.appspot.com",
    messagingSenderId: "378580503984",
    appId: "1:378580503984:web:1baf3d361f98fcef0a9a75",
    measurementId: "G-6XQ509960G"
  });

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth, firebaseApp };
