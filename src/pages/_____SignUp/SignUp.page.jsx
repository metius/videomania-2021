import React, {useContext} from 'react';
import {UserContext} from '../../firebase/UserProvider';
import ProfileInfo from '../../components/user-forms/ProfileInfo.component';
import SignUpForm from '../../components/user-forms/SignUpForm.component'

const SignUpPage = () => {
  const {user} = useContext(UserContext);
  return(
    <>
      {
        !!user ? (
          //In this case user exsists or he is signed in - so will show profile page
          
          <ProfileInfo user={user}/>
          //<Redirect to={{pathname: "/profile"}} />
          //It will actually be the Profile component
          //where we will be display basic info form firebase/firestore
        ) : (
          //here I will render sign-in forms (components)
          <SignUpForm />
            /* <div>
          
            <p>Please Sign In</p>
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div> */
        )
      }
    </>
  )
}

export default SignUpPage;