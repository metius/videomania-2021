import React, {useEffect, useState} from 'react';
import {auth} from './config';

export const AuthContext = React.createContext();

export const Authprovider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return(
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}