import React, {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {RestaurantList} from '../styles/restaurant-screen.styles';
import {Spacer} from '../../../components/spacer/spacer.component';
import {SafeArea} from '../../../components/utility/safe-area.component';

import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {FavouritesContext} from '../../../services/favourites/favourites.context';

import {ActivityIndicator, Colors} from 'react-native-paper';
import styled from 'styled-components/native';
import {Search} from '../components/search.component';
import {FavouritesBar} from '../../../components/favourites/favourites-bar.component';
import {FadeInView} from '../../../components/animations/fade.animation';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({navigation}) => {
  const {restaurants, isLoading} = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);

  const {favourites} = useContext(FavouritesContext);

  //console.log(favourites);
  //console.log(restaurants);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          //console.log(item);
          return (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RestaurantDetails', {
                    restaurant: item,
                  });
                }}>
                <Spacer position="bottom" size="medium">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
