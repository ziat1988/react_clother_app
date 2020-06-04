import firebase from "firebase/app"; // can co cai nay

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOejDb5b3sm115kGLIMhyzcPk4DUQjrts",
  authDomain: "crown-db-dab73.firebaseapp.com",
  databaseURL: "https://crown-db-dab73.firebaseio.com",
  projectId: "crown-db-dab73",
  storageBucket: "crown-db-dab73.appspot.com",
  messagingSenderId: "149907376469",
  appId: "1:149907376469:web:bcc2ed47124084d705c7dc",
  measurementId: "G-TLMED828P7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth);
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
