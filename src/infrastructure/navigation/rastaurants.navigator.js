import React from 'react';
//mport {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{headerShown: false}}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
