import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAs1tOUNPS9zdrz-twBaxfrN-L9C84DiV0",
    authDomain: "pats-chat-19502.firebaseapp.com",
    projectId: "pats-chat-19502",
    storageBucket: "pats-chat-19502.appspot.com",
    messagingSenderId: "819937858951",
    appId: "1:819937858951:web:f8c94ec58561751d46ef22",
    measurementId: "G-E5RBLF7THM"
}

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    auth,
    provider
}