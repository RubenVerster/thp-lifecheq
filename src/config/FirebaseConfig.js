import firebase from 'firebase';
require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyBPTHE19xM6vLjxHyNGgLVPtqw3xcWWTkk',
  authDomain: 'lifecheq-420.firebaseapp.com',
  databaseURL: 'https://lifecheq-420.firebaseio.com',
  projectId: 'lifecheq-420',
  storageBucket: 'lifecheq-420.appspot.com',
  messagingSenderId: '155715305519',
  appId: '1:155715305519:web:63e3ef2f0fca82ed3f06da',
  measurementId: 'G-569NP8D4SR'
};

const firebaseSetup = firebase.initializeApp(firebaseConfig);

export default firebaseSetup;
