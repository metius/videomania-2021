import React, {useContext} from 'react';
import firebase from 'firebase';
import {FirebaseAuth} from 'react-firebaseui';
import {UserContext} from '../../firebase/UserProvider';
import ProfileInfo from '../../components/user-forms/ProfileInfo.component';
import SignInForm from '../../components/user-forms/SignInForm.component';


const ProfilePage = (props) => {
  const {user} = useContext(UserContext);
  
  return(
    <main>
      {
        user ? (
          //In this case user exsists or he is signed in - so will show profile page
          
          <ProfileInfo user={user}/>
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