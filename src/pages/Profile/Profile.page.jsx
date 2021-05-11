import React, {useContext} from 'react';
import {UserContext} from '../../firebase/UserProvider';
import ProfileInfo from '../../components/user-forms/ProfileInfo.component';
import SignInForm from '../../components/user-forms/SignInForm.component';


const ProfilePage = (props) => {
  const {user} = useContext(UserContext);
  
  return(
    <main>
      {
        user 
        ? (
          //In this case user exsists or he is signed in - so will show profile page          
          <ProfileInfo user={user}/>
        ) 
        : (
          //here I will render sign-in forms (components)
          <SignInForm />
        )
      }
    </main>
  )
}

export default ProfilePage;