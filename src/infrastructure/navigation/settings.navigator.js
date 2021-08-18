import React from 'react';
import {SettingsScreen} from '../../features/settings/screens/settings.screen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FavouritesScreen} from '../../features/settings/screens/favourites.screen';
import {CameraScreen} from '../../features/settings/screens/camera.screen';

const SettingsStack = createNativeStackNavigator();

export const SettingsNavigator = ({route, navigation}) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: true,
        //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
