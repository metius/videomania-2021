import React, {useContext} from 'react';
import {auth} from '../../firebase/firebase';
import {UserContext} from '../../firebase/UserProvider';
import {useHistory} from 'react-router-dom';
import './UserForms.styles.scss';

const ProfileInfo = () => {
  const user = useContext(UserContext);
  let history = useHistory();
  console.log(user);
  return(
    <div className='profile'>
      Profile component
      <button className="login-form__btn" onClick={() => {
        auth.signOut()
          .then(() => history.push("/"))         
      }}>Sign Out</button>      
    </div>
  )
}

export default ProfileInfo;