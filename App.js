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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

export default App;
