/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';

import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';
/*import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/inter/oswald';
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'; */

function App() {
  /* let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
 */
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

export default App;
