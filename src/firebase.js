import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAm6s3htnv7vVLCz-2rkpREBGFqeXdy_0Q",
  authDomain: "fir-539e5.firebaseapp.com",
  projectId: "fir-539e5",
  storageBucket: "fir-539e5.appspot.com",
  messagingSenderId: "277997223822",
  appId: "1:277997223822:web:b41d9f5883294509dfeedf",
  measurementId: "G-VW6PQT6WCV",
};

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;
//   const userRef = firestore.doc(`user/${userAuth.uid}`);
//   const snapShot = await userRef.get();
//   console.log(userRef);
//   if (!snapShot.exists) {
//     const { displayName, email, number } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         number,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }
//   return userRef;
// };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider2 = new firebase.auth.FacebookAuthProvider();
provider2.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(provider2);

export default firebase;
