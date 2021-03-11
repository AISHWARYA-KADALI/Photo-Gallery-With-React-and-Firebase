
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyChQXyWMyvm_vR7zyqdS-2wBk-BayQvmho",
    authDomain: "firegram-reactwebapp.firebaseapp.com",
    projectId: "firegram-reactwebapp",
    storageBucket: "firegram-reactwebapp.appspot.com",
    messagingSenderId: "728783829739",
    appId: "1:728783829739:web:15e9257110e73495dc5cae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }; //exporting services
