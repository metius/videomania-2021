import React, {useContext} from 'react';
import {UserContext} from '../../firebase/UserProvider';
import ProfileInfo from '../../components/user-forms/ProfileInfo.component';
import SignInForm from '../../components/user-forms/SignInForm.component';


const ProfilePage = (props) => {
  const {user} = useContext(UserContext);
  console.log("Profile page props", props)
  
  let redirectPage;

  if(user) {
    if(props.location.state === undefined) {
      redirectPage = <ProfileInfo user={user}/>
    } else {
      redirectPage = props.history.push(props.location.state.from);
    }
  } else {
    redirectPage = <SignInForm />;
  }

  return(
    <main>
      {redirectPage}
      {/* {
        user 
        ? (
          //In this case user exsists or he is signed in - so will check if previously coming from somewhere else - otherwise profile page
          <ProfileInfo user={user}/>
        ) 
        : (
          //here I will render sign-in forms (components)
          <SignInForm />
        )
      } */}
    </main>
  )
}

export default ProfilePage;