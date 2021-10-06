import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyCwGAoAPsMgBEIsc_axxGNgNk1iZcC6BXw",
    authDomain: "pro-7-2d5de.firebaseapp.com",
    projectId: "pro-7-2d5de",
    storageBucket: "pro-7-2d5de.appspot.com",
    messagingSenderId: "259324822314",
    appId: "1:259324822314:web:ee69e4b84ec187e4925453"
  };
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

