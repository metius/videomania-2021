import {auth} from './firebase';
import firebase from 'firebase';

export const setPersistence = (rememberMe) => {
  if(!rememberMe) {
    return auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
  } else {
    return auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  }
}

export const sendPasswordResetEmail = (email) => {
  return auth.sendPasswordResetEmail(email);
}

export const signInWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
}

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const user = auth.signInWithPopup(provider);
  return user;
}
export const signInWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return auth.signInWithPopup(facebookProvider)
}
export const signInWithTwitter = () => {
  const provider = new firebase.auth.TwitterAuthProvider();
  return auth.signInWithPopup(provider);
}