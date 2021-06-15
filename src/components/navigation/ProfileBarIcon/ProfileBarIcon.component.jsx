import React, {useContext} from 'react';
import {UserContext} from '../../../firebase/UserProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './ProfileBarIcon.styles.scss';

const ProfileBarIcon = () => {
  const {user} = useContext(UserContext);
  return(
    <>
      {
        user 
        ? 
          <>
            <span>&nbsp;{user.displayName}&nbsp;</span>
            <FontAwesomeIcon icon={faUserCircle} />
          </>
        : 
        <>
          <span>&nbsp;Sign In&nbsp;</span>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </>
      }
    </>
  )
}

export default ProfileBarIcon;