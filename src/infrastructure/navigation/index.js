import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppNavigator} from './app.navigator';
import {AccountNavigator} from './account.navigator';

import {AuthenticationContext} from '../../services/authentication/authentication.context';

export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);

  return (
    <NavigationContainer independent={true}>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
