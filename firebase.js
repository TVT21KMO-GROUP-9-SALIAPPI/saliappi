import firebase from "firebase/app"
import "firebase/firestore"
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB5i1FWXKs3yrTooggkQ02iraa5NpH19q4",
    authDomain: "r9-saliappi.firebaseapp.com",
    projectId: "r9-saliappi",
    storageBucket: "r9-saliappi.appspot.com",
    messagingSenderId: "874619480973",
    appId: "1:874619480973:web:092e8c7acb5e340d12ebc4"
  };

  const app = initializeApp(firebaseConfig);

  export default firebase
