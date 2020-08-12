import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCClkqS3yRRSn-Tap6GFCSredZBvQ1FM6w",
    authDomain: "rok-pharm.firebaseapp.com",
    databaseURL: "https://rok-pharm.firebaseio.com",
    projectId: "rok-pharm",
    storageBucket: "rok-pharm.appspot.com",
    messagingSenderId: "884474571460",
    appId: "1:884474571460:web:7bb8fe83186ac44a1ff791"
};


firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;