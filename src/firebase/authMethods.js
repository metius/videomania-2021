import {auth} from './firebase';
import firebase from 'firebase';

export const setPersistence = (rememberMe) => {
  console.log("Value of rememberMe flag:", rememberMe)
  if(!rememberMe) {
    return auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
  } else {
    return auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  }
}

export const signInWithEmailAndPassword = (event, email, password) => {
  event.preventDefault();
  
  return auth.signInWithEmailAndPassword(email, password);
}

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
}
export const signInWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return auth
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
      console.log(`Detected errors. error coded: ${errorCode} - error message: ${errorMessage} - email: ${email} - crederntial: ${credential}`)
      //console.log(errorMessage);
      console.table(error);
    })
}
export const signInWithTwitter = () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  return auth.signInWithPopup(provider);
}