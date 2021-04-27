import React, {useContext} from 'react';
import {auth} from '../../firebase/firebase';
import {UserContext} from '../../firebase/UserProvider';
import './UserForms.styles.scss';

const ProfileInfo = () => {
  const user = useContext(UserContext);
  return(
    <div className='profile'>
      Profile component
      <button className="login-form__btn" onClick={() => auth.signOut()}>Sign Out</button>      
    </div>
  )
}

export default ProfileInfo;