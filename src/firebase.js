import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFEiURXCWr83RXMZ3f8NIsRsNGwjV14vk",
  authDomain: "ecommerce-ac640.firebaseapp.com",
  projectId: "ecommerce-ac640",
  storageBucket: "ecommerce-ac640.appspot.com",
  messagingSenderId: "1043579287140",
  appId: "1:1043579287140:web:6396f6f3e2be173cb85171",
  measurementId: "G-CPEZJBXYRJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };