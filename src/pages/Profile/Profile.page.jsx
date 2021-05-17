import React, {useContext} from 'react';
import {UserContext} from '../../firebase/UserProvider';
import ProfileInfo from '../../components/user-forms/ProfileInfo.component';

const ProfilePage = (props) => {
  const {user} = useContext(UserContext);
  console.log("Profile page props", props)

  return(
    <main>
      <ProfileInfo user={user}/>
    </main>
  )
}

export default ProfilePage;