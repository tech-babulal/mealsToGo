import React, {useContext} from 'react';

import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {
  SearchContainer,
  RestaurantList,
} from '../styles/restaurant-screen.styles';
import {Spacer} from '../../../components/spacer/spacer.component';
import {SafeArea} from '../../../components/utility/safe-area.component';

import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {ActivityIndicator, Colors} from 'react-native-paper';
import styled from 'styled-components/native';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext);
  console.log(error);
  //console.log(restaurants);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          console.log(item);
          return (
            <>
              <Spacer position="bottom" size="medium">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
