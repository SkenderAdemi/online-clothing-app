import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBuHMa9LpMGo8t0mnFwdYVdGIguXOS0nV4",
    authDomain: "online-clothing-f74ad.firebaseapp.com",
    databaseURL: "https://online-clothing-f74ad.firebaseio.com",
    projectId: "online-clothing-f74ad",
    storageBucket: "online-clothing-f74ad.appspot.com",
    messagingSenderId: "1058994152895",
    appId: "1:1058994152895:web:fa90b88b4dc0fb6d59ad0a",
    measurementId: "G-N7721XG0CL"
  }

firebase.initializeApp(config);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     } catch (error) {
//       console.log('error creating user', error.message);
//     }
//   }

//   return userRef;
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;