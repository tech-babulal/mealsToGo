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
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Navigation} from './src/infrastructure/navigation';

import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';

import {LocationContextProvider} from './src/services/location/location.context';

import {FavouritesContextProvider} from './src/services/favourites/favourites.context';

import * as firebase from 'firebase';

/*import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/inter/oswald';
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'; */
//const Tab = createBottomTabNavigator();

//const Tab = createBottomTabNavigator();

// const Settings = () => (
//   <SafeArea>
//     <Text>Settings</Text>
//   </SafeArea>
// );

var firebaseConfig = {
  apiKey: 'AIzaSyDnFzrAXVo1tSf9_VrAz4PBJl4GuW0EWkY',
  authDomain: 'mealstogo-bf416.firebaseapp.com',
  projectId: 'mealstogo-bf416',
  storageBucket: 'mealstogo-bf416.appspot.com',
  messagingSenderId: '288293770008',
  appId: '1:288293770008:web:f13e88d3027309a9f5446d',
};

firebase.initializeApp(firebaseConfig);

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

  //console.log(restaurantsRequest);

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

export default App;
