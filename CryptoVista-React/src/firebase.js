import firebaseConfig from "./config/firebaseconfig";
import { initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth' ;
import {getFirestore} from 'firebase/firestore' ;

// import firebase from 'firebase';
// import 'firebase/database';

const firebaseApp=initializeApp(firebaseConfig);
const auth=getAuth(firebaseApp);
const db=getFirestore(firebaseApp);

// var database = firebase.database();


export {auth ,db} ;