import React, {useContext} from 'react';
import {auth, getFavouriteList} from '../../firebase/firebase';
import {UserContext} from '../../firebase/UserProvider';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import FavouriteList from './FavouriteList.component';
import withFirebase from '../HOC/withFirebase.component';
import './profile.styles.scss';

const ProfileInfo = () => {
  const {user} = useContext(UserContext); //will need to show info and manage logged in user
  let history = useHistory(); //to redirect after sign out
  const FavouritesWithData = withFirebase(
    FavouriteList, 
    () => getFavouriteList(user.uid)
  );

  return(
    <div className="profile-page">
      <div className='profile'>
        <div className='profile__title'>
          <h2 className='profile__username'>Hello, {user.displayName}</h2>
          <div className='profile__signout' onClick={() => {
            auth.signOut()
              .then(() => history.push("/"))         
          }}>
            <span className='profile__signout--text'>Sign Out</span>
            <FontAwesomeIcon icon={faSignOutAlt} className='profile__signout--icon'/>
          </div>
        </div>
        {/* Favourite list */}
        <FavouritesWithData />
             
      </div>
    </div>
  )
}

export default ProfileInfo;