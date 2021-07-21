// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDKxIgb5dfK-adhYbru1M-vd0v21pGC2ys",
  authDomain: "tiktok-clone-f1186.firebaseapp.com",
  projectId: "tiktok-clone-f1186",
  storageBucket: "tiktok-clone-f1186.appspot.com",
  messagingSenderId: "195165872154",
  appId: "1:195165872154:web:b77fcc59c61bb88f11f1a3",
  measurementId: "G-VWKN27VSYW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;