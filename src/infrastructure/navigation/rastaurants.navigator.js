import React from 'react';
//mport {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';
import {RestaurantDetailScreen} from '../../features/restaurants/screens/restaurant-detail.screen';

import {Text} from 'react-native';

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
