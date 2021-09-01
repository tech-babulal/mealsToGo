import React, {useContext} from 'react';
import {SafeArea} from '../../components/utility/safe-area.component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RestaurantsNavigator} from './rastaurants.navigator';
import {MapScreen} from '../../features/map/screens/map.screen';
import {AuthenticationContext} from '../../services/authentication/authentication.context';
import {SettingsNavigator} from './settings.navigator';
import {RestaurantsContextProvider} from '../../services/restaurants/restaurants.context';
import {LocationContextProvider} from '../../services/location/location.context';
import {FavouritesContextProvider} from '../../services/favourites/favourites.context';
import {CheckoutScreen} from '../../features/checkout/screens/checkout.screen';
import {CartContextProvider} from '../../services/cart/cart.context';

const Tab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Checkout: 'md-cart',
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

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <CartContextProvider>
          <Tab.Navigator
            initialRouteName="Restaurants"
            activeColor="#B71C1C"
            inactiveColor="#757575"
            barStyle={{backgroundColor: 'white'}}
            screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Checkout" component={CheckoutScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </CartContextProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
