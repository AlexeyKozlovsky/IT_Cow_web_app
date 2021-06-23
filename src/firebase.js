import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCx2iRel03PvqE5Ys0K6aGudvWa66qDHL4",
    authDomain: "it-cow.firebaseapp.com",
    databaseURL: "https://it-cow-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "it-cow",
    storageBucket: "it-cow.appspot.com",
    messagingSenderId: "474571209610",
    appId: "1:474571209610:web:5c3682eb75854a8c53e673",
    measurementId: "G-9GXNVD3WZG"
};

var filebase = firebase.initializeApp(firebaseConfig)
export const dbRef = firebase.database().ref();
export default firebase