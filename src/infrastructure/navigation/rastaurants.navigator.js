import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';
import {RestaurantDetailScreen} from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <RestaurantStack.Screen
        options={{
          header: () => null,
        }}
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
