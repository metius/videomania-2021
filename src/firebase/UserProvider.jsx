import React, {useEffect, useState} from 'react';
import {auth, generateUserDocument} from './firebase';

export const UserContext = React.createContext({user: null});

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      generateUserDocument(user)
        .then(user => setUser(user));
    })
  }, []);

  return(
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}