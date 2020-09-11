import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATc8Q3ZWEseBuCNp6IWIMFbme2S4MMY6U",
    authDomain: "todoapp-a517e.firebaseapp.com",
    databaseURL: "https://todoapp-a517e.firebaseio.com",
    projectId: "todoapp-a517e",
    storageBucket: "todoapp-a517e.appspot.com",
    messagingSenderId: "677217534682",
    appId: "1:677217534682:web:a8b6c0c5933808ecba5be3",
    measurementId: "G-8L4N65N13J"
})
const db = firebaseApp.firestore()

export default db   