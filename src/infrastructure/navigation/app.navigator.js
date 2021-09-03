import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RestaurantsNavigator} from './rastaurants.navigator';
import {MapScreen} from '../../features/map/screens/map.screen';
import {SettingsNavigator} from './settings.navigator';
import {RestaurantsContextProvider} from '../../services/restaurants/restaurants.context';
import {LocationContextProvider} from '../../services/location/location.context';
import {FavouritesContextProvider} from '../../services/favourites/favourites.context';
import {CheckoutScreen} from '../../features/checkout/screens/checkout.screen';
import {CartContextProvider} from '../../services/cart/cart.context';
import {colors} from '../theme/colors';

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
            activeColor={colors.brand.primary}
            inactiveColor={colors.brand.tabDisable}
            barStyle={{backgroundColor: colors.brand.inverse}}
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
