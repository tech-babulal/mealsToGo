import React, {useState, createContext} from 'react';
import * as firebase from 'firebase';

import {loginRequest} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  firebase.auth().onAuthStateChanged(userDetails => {
    if (userDetails) {
      console.log('UserDetails');
      //setIsAuthenticated(true);
      setUser(userDetails);

      //console.log(userDetails);
      //setIsLoading(true);
    } else {
      //setIsLoading(true);
    }
  });
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(u => {
        setUser(u);
        console.log(u);
        setIsLoading(false);
        //setIsAuthenticated(true);
      })
      .catch(e => {
        //console.log(e);
        setIsLoading(false);
        setError(e.toString());
        //setIsAuthenticated(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match');
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
        //setIsAuthenticated(true);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e.toString());
        //setIsAuthenticated(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user: user,
        isLoading: isLoading,
        error: error,
        onLogin: onLogin,
        onRegister: onRegister,
        onLogout: onLogout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
