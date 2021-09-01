import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const config = {
    apiKey: "AIzaSyBPzIk1r9Eqk69WtpK3HqQqWpYekcKvs_E",
    authDomain: "crown-thrift.firebaseapp.com",
    projectId: "crown-thrift",
    storageBucket: "crown-thrift.appspot.com",
    messagingSenderId: "155557083417",
    appId: "1:155557083417:web:d180f5f722e93e60d62d88",
    measurementId: "G-TS0MBZS521"
};

firebase.initializeApp(config)
export const firestore = firebase.firestore
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)
