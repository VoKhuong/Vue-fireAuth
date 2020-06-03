const firebase = require("firebase/app");

require("firebase/auth");

// Paste your firebase config here
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
