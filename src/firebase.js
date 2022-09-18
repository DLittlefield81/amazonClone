import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDgxLeo4dB_6oK88QvxYXc5SWHMnHn8DGs",
    authDomain: "offworldwebservices.firebaseapp.com",
    databaseURL: "https://offworldwebservices.firebaseio.com",
    projectId: "offworldwebservices",
    storageBucket: "offworldwebservices.appspot.com",
    messagingSenderId: "463557711501",
    appId: "1:463557711501:web:1cd411b10a2c39ccf974c4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };