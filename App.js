/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {NavigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';
import {SafeArea} from './src/components/utility/safe-area.component';
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
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const Setting = () => (
  <SafeArea>
    <Text>Setting</Text>
  </SafeArea>
);
const Tab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

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
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Restaurants"
                activeColor="#B71C1C"
                inactiveColor="#757575"
                barStyle={{backgroundColor: theme.colors.brand.inverse}}
                screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Setting} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

export default App;
// screenOptions={({route}) => ({
//   tabBarIcon: ({focused, color, size}) => {
//     let iconName;

//     if (route.name === 'Restaurants') {
//       iconName = focused ? 'restaurant' : 'restaurant-outline';
//     } else if (route.name === 'Settings') {
//       iconName = focused ? 'settings' : 'settings-outline';
//     } else if (route.name === 'Map') {
//       iconName = focused ? 'map' : 'map-outline';
//     }
//     // You can return any component that you like here!
//     return <Ionicons name={iconName} size={size} color={color} />;
//   },
//   tabBarActiveTintColor: 'tomato',
//   tabBarInactiveTintColor: 'gray',
// })}
