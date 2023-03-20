import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyB2CBDEpUsxJLqXYLHITlyzaTOLLT3e0co",
  authDomain: "instagram-clone-7af2e.firebaseapp.com",
  databaseURL: "https://instagram-clone-7af2e-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-7af2e",
  storageBucket: "instagram-clone-7af2e.appspot.com",
  messagingSenderId: "37613997954",
  appId: "1:37613997954:web:1409543a2544a26022c99b",
  measurementId: "G-YLK6BZ1ZHP"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };