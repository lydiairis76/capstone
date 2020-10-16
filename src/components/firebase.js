import firebase from "firebase/app"
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA5R7dxpvqIZLKVEZF-7bFdTTHT1ctMMBo",
    authDomain: "crud-tutorial-aea8d.firebaseapp.com",
    databaseURL: "https://crud-tutorial-aea8d.firebaseio.com",
    projectId: "crud-tutorial-aea8d",
    storageBucket: "crud-tutorial-aea8d.appspot.com",
    messagingSenderId: "760260526175",
    appId: "1:760260526175:web:2f7be09f3a1fe9b39a5bea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase