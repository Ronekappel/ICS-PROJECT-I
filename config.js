//firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

//web app's firebase configuration

const firebaseConfig ={

    apiKey: 'AIzaSyA7AIS4hcv9Z8az3OEsiI3aCGuggY4xUtk',
 // authDomain: 'YOUR_AUTH_DOMAIN',
  //databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'thecarpoolapp-3a1ae',
  //storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: '228196116164',
  appId: '1:228196116164:android:8e6f5c46133b7dd46c0b91',


}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};