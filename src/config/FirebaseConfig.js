import firebase from 'firebase'
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyB8US2gLl2W3QfLA4ofhw66E7eDSy2OnpQ",
  authDomain: "adoption-portal.firebaseapp.com",
  databaseURL: "https://adoption-portal.firebaseio.com",
  projectId: "adoption-portal",
  storageBucket: "adoption-portal.appspot.com",
  messagingSenderId: "1073607543230",
  appId: "1:1073607543230:web:86c6e094c0c7853bac51ef"
};

const firebaseSetup = firebase.initializeApp(firebaseConfig)

export default firebaseSetup