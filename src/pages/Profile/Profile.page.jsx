import React, {useContext} from 'react';
import firebase from 'firebase';
import {FirebaseAuth} from 'react-firebaseui';
import {AuthContext} from '../../firebase/context';
import ProfileInfo from '../../components/user-forms/ProfileInfo.component';
import SignInForm from '../../components/user-forms/SignInForm.component';


const ProfilePage = () => {
  const {user} = useContext(AuthContext);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  
  return(
    <main>
      {
        !!user ? (
          //In this case user exsists or he is signed in - so will show profile page
          
          <ProfileInfo />
          //<Redirect to={{pathname: "/profile"}} />
          //It will actually be the Profile component
          //where we will be display basic info form firebase/firestore
        ) : (
          //here I will render sign-in forms (components)
          <SignInForm />
            /* <div>
          
            <p>Please Sign In</p>
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div> */
        )
      }
    </main>
  )
}

export default ProfilePage;