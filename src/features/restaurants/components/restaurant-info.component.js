import React from 'react';
import {Text} from 'react-native';

export const RestaurantInfo = ({restaurant}) => {
  const {name = 'Some Restaurant', icon, photos, address, openingHours, rating, isClosedTemporary} =
    restaurant;

  return <Text>Restaurant Info</Text>;
};
