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
  const createdAt = new Date();
  //console.log(`User in generate user document: ${JSON.stringify(user)}`);
  if(!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {email} = user;
    try {
      await userRef.set({        
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log(`Error creating new user: ${error}`);
    }
  }

  return getUserDocument(user.uid);
}

export const setFavouriteDocument = async (action, uid, itemId, type, favId) => {
  if(!uid) return;
  //step 0: ideally, since I read the data at the mounting of the application, I shouldn't have the need to do this. Favorites will be synced 
  //step 1: get the snapshot of data
  const collection = firestore.collection('favourites');
  //step2: query the data for a match uid/id
  collection.where("uid", "==", uid).where("itemid", "==", itemId)
    .get()
    .then((querySnapshot) => {
      //console.log(`Checking query results: ${JSON.stringify(querySnapshot)}`);      
      if(!querySnapshot.empty) {
        //step2-a: if there is a match, we are removing the favourite -> go to remove
        console.log("Not empty - remove");
        querySnapshot.forEach(doc => {
          console.log(`Doc ID: ${doc.id}`)
          removeFavourite(doc.id)
            .catch(err => console.log(`Error while removing favourite: ${err.message}`))          
        });
      } else {
        //step2-b: if no match, we are adding -> we have the code for that
        console.log("Empty - add");
        addFavourite(uid, itemId, type)
          .catch((err) => console.log(`Error while adding new document: ${err.message}`))       
      }
    })
    .catch(err => {console.log("Error retrieving document", err.message)})

  // let docRef;
  // if(action) { //action is true --> adding document (favourite)
  //   try {
  //     docRef = await addFavourite(uid, itemId, type);
  //     console.log(`Added new favourite with ID ${docRef.id}`);
  //   } catch(err) {
  //     console.log(`Error while adding new favourite: ${err.message}`)
  //   }
  // } else {  //action is false --> removing document (favourite)
  //   try {
  //     docRef = removeFavourite(favId);
  //     console.log(`Removed favourite with ID ${docRef.id}`);
  //   } catch(err) {
  //     console.log(`Error while removing favourite: ${err.message}`)
  //   }
  // }
  // return getDocument(docRef.id, 'favourites');
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

const getDocument = async (id, collection) => {
  if(!id) return null;

  try {
    const userDocument = await firestore.doc(`${collection}/${id}`).get();
    return {
      ...userDocument.data()
    }
  } catch(error) {
    console.log(`Error fetching user: ${error}`);
  }
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