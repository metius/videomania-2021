import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  console.log(`In generateUserDocument`);
  if(!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {email, displayname} = user;
    try {
      await userRef.set({
        displayname,
        email,
        ...additionalData
      });

    } catch(error) {
      console.log(`Error creating new user: ${error}`);
    }
  }

  return getUserDocument(user.uid);
}

const getUserDocument = async uid => {
  if(!uid) return null;

  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    }
  } catch(error) {
    console.log(`Error fetching user: ${error}`);
  }
}