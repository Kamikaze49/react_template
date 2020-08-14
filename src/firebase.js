import * as firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD5jNb-OK8gzYwpGfOcfoi_nLs9zylO4Qs",
    authDomain: "pharm-8b05f.firebaseapp.com",
    databaseURL: "https://pharm-8b05f.firebaseio.com",
    projectId: "pharm-8b05f",
    storageBucket: "pharm-8b05f.appspot.com",
    messagingSenderId: "866036580357",
    appId: "1:866036580357:web:7c09985b0ae1c3ed1f1c6c",
    measurementId: "G-J80SSWLJPF"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)



const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebase.auth();

export { db, storage, auth };