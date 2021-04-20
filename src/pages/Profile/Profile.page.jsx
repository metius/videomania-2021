import React, {useContext} from 'react';
import firebase from 'firebase';
import {FirebaseAuth} from 'react-firebaseui';
import {AuthContext} from '../../firebase/context';
import {Redirect} from 'react-router-dom';


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
    <div className='cc'>
      {
        !!user ? (
          //In this case user exsists or he is signed in - so will show profile page
          //as a test I can redirect to home
          <Redirect to={{pathname: "/"}} />
        ) : (
          <div>
            <p>please Sign In</p>
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        )
      }
    </div>
  )
}

export default ProfilePage;