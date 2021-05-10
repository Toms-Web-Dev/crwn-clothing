import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDlbSvFJzjJNDD9CDE4ZjB6MSWpt23Sj8s',
    authDomain: 'crwn-db-bc26d.firebaseapp.com',
    projectId: 'crwn-db-bc26d',
    storageBucket: 'crwn-db-bc26d.appspot.com',
    messagingSenderId: '333942837265',
    appId: '1:333942837265:web:8ae1f3714df5b4e52be1b0',
    measurementId: 'G-TQLGQ0SSFX',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
