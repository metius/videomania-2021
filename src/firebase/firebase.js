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
  console.log(`User in generate user document: ${JSON.stringify(user)}`);
  if(!user) return;
  console.log("We should not see this the first time")

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  
  if(!snapshot.exists) {
    console.log('Hopefully only if user do not exsist:', additionalData)
    const createdAt = new Date();
    const {email, displayName} = user;
    //const {displayName} = additionalData.displayName;
    try {
      await userRef.set({        
        email,
        createdAt,
        displayName,
        // ...additionalData
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

export const getFavouriteDocument = (uid, itemId) => {
  return firestore.collection('favourites').where("uid", "==", uid).where("itemid", "==", itemId).get();
}

export const setFavouriteDocument = async (uid, itemId, type) => {
  if(!uid) return; //in the next release, a user NOT logged in will be redirect to Sign IN page and then back to it

  //step 1: get the snapshot of data
  const collection = firestore.collection('favourites');
  //step2: query the data for a match uid/id
  return collection.where("uid", "==", uid).where("itemid", "==", itemId)
    .get()
    .then((querySnapshot) => {
      //console.log(`Checking query results: ${JSON.stringify(querySnapshot)}`);      
      if(!querySnapshot.empty) {
        //step2-a: if there is a match, we are removing the favourite -> go to remove
        querySnapshot.forEach(doc => {
          removeFavourite(doc.id)
            .catch(err => console.log(`Error while removing favourite: ${err.message}`))          
        });
      } else {
        //step2-b: if no match, we are adding -> we have the code for that
        addFavourite(uid, itemId, type)
          .catch((err) => console.log(`Error while adding new document: ${err.message}`))       
      }
    })
    .catch(err => {console.log("Error retrieving document", err.message)})
}

export const getFavouriteList = (uid) => {
  //Ideally I don't have to check if user is logged in because I can reach this ONLY when logged (Profile page -> Profile info).
  return firestore.collection('favourites').where("uid", "==", uid).get();
}

const addFavourite = (uid, itemId, type) => {
  return firestore.collection("favourites").add({
    itemid: itemId,
    uid,
    type,
  });
}

const removeFavourite = (docId) => {
  return firestore.collection("favourites").doc(docId).delete();
}
