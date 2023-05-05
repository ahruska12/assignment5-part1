import firebase from 'firebase/app'
import 'firebase/firestore'

// access firebase database with db variable

const db = firebase.firestore()

const firebaseConfig = {
  apiKey: 'AIzaSyBhY9TyLosvjdvuwbsHqATBRzWB6VJp3CY',
  authDomain: 'quitter-50c9e.firebaseapp.com',
  projectId: 'quitter-50c9e',
  storageBucket: 'quitter-50c9e.appspot.com',
  messagingSenderId: '466805519387',
  appId: '1:466805519387:web:465bc668e5396b0c10b4be'
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig)

export default db
