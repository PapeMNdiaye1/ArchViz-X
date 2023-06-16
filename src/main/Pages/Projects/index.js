import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref, listAll } from "firebase/storage";
const storage = getStorage();

const firebaseConfig = {
    apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
    authDomain: "todo-app-e3cf0.firebaseapp.com",
    projectId: "todo-app-e3cf0",
    storageBucket: "todo-app-e3cf0.appspot.com",
    messagingSenderId: "940016886081",
    appId: "1:940016886081:web:91686613f16b1b1f8001c0",
    measurementId: "G-JHPC7TP12K"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


function nimp(folder) {

    const listRef = ref(storage, 'City/');

    // listAll(listRef)
    //     .then((res) => {
    //         res.prefixes.forEach((folderRef) => {
    //             // All the prefixes under listRef.
    //             // You may call listAll() recursively on them.
    //         });
    //         res.items.forEach((itemRef) => {
    //             // All the items under listRef.
    //         });
    //     }).catch((error) => {
    //         // Uh-oh, an error occurred!
    //     });
}


export { auth, db, nimp };
