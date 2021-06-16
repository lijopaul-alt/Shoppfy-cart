import firebase from "firebase/app";
import "firebase/firebase-auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAgqvmMqqhNVulJyAauA-eJgkhjDjeASmo",
  authDomain: "authentication-d36d0.firebaseapp.com",
  projectId: "authentication-d36d0",
  storageBucket: "authentication-d36d0.appspot.com",
  messagingSenderId: "844107203989",
  appId: "1:844107203989:web:e6af4db1e4c571b3bf629c",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
