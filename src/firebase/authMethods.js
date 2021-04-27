import {auth, googleProvider, twitterProvider} from './firebase';
import firebase from 'firebase';

export const signInWithEmailAndPassword = () => {}

export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
}
export const signInWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  auth
    .signInWithPopup(facebookProvider)
    .then(function(result){
      let token =  result.credential.accessToken;
      let user = result.user;
      console.log(user);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      //console.log(`Detected errors. error coded: ${errorCode} - error message: ${errorMessage} - email: ${email} - crederntial: ${credential}`)
      //console.log(errorMessage);
      console.table(error);
    })
}
export const signInWithTwitter = () => {
  auth.signInWithPopup(twitterProvider);
}