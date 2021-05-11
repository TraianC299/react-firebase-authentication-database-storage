import firebase from 'firebase/app'
import "firebase/auth"
//import storage
import "firebase/storage"
//import stabase
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAqe9IonT6SdYXO0gNGQnIwnFdgZyAx_mQ",
    authDomain: "auth-development-6ffff.firebaseapp.com",
    projectId: "auth-development-6ffff",
    storageBucket: "auth-development-6ffff.appspot.com",
    messagingSenderId: "506663143315",
    appId: "1:506663143315:web:70128b0906f97d7a470a66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()

  //initialize storage
  const storage=firebase.storage()

  //initialize database
  const database = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {auth, storage, database, timestamp}