import React from 'react';

import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {
  SearchContainer,
  RestaurantList,
} from '../styles/restaurant-screen.styles';
import {Spacer} from '../../../components/spacer/spacer.component';
import {SafeArea} from '../../../components/utility/safe-area.component';

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>

    <RestaurantList
      data={[
        {name: 1},
        {name: 2},
        {name: 3},
        {name: 4},
        {name: 5},
        {name: 6},
        {name: 7},
      ]}
      renderItem={() => (
        <>
          <Spacer position="bottom" size="medium">
            <RestaurantInfoCard />
          </Spacer>
        </>
      )}
      keyExtractor={item => item.name}
    />
  </SafeArea>
);
