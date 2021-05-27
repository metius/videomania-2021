import React, {useContext} from 'react';
import {auth, getFavouriteList} from '../../firebase/firebase';
import {UserContext} from '../../firebase/UserProvider';
import {useHistory} from 'react-router-dom';
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

  console.log(`User ID: ${user.uid} - Display name: ${user.displayName}`);
  return(
    <div className="profile-page">
      <div className='profile'>
        <h2>Hello, {user.displayName}</h2>
        {/* Favourite list */}
        {/* <FavouriteList uid={user.uid} /> */}
        <FavouritesWithData />
        
        {/* SignOut button */}
        <button className="login-form__btn" onClick={() => {
          auth.signOut()
            .then(() => history.push("/"))         
        }}>Sign Out</button>      
      </div>
    </div>
  )
}

export default ProfileInfo;