import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB1jyVsyRl9tDGNUqIWiLJl8tYv1DVoqvA',
  authDomain: 'boomtown-b963e.firebaseapp.com',
  databaseURL: 'https://boomtown-b963e.firebaseio.com',
  projectId: 'boomtown-b963e',
  storageBucket: 'boomtown-b963e.appspot.com',
  messagingSenderId: '374069127304'
};
firebase.initializeApp(config);

export default firebase;
