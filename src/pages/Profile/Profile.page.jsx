import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';
import {UserContext} from '../../firebase/UserProvider';
import ProfileInfo from '../../components/profile/ProfileInfo.component';

const ProfilePage = () => {
  const {user} = useContext(UserContext);

  return(
    <ProfileInfo user={user}/>
  )
}

export default withRouter(ProfilePage);