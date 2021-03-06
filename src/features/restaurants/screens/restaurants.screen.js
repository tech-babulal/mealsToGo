import React, {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {RestaurantList} from '../styles/restaurant-screen.styles';
import {Spacer} from '../../../components/spacer/spacer.component';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {LocationContext} from '../../../services/location/location.context';

import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {FavouritesContext} from '../../../services/favourites/favourites.context';

import {ActivityIndicator, Colors} from 'react-native-paper';
import styled from 'styled-components/native';
import {Search} from '../components/search.component';
import {FavouritesBar} from '../../../components/favourites/favourites-bar.component';
import {FadeInView} from '../../../components/animations/fade.animation';
import {Text} from '../../../components/typography/text.component';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({navigation}) => {
  const {error: locationError} = useContext(LocationContext);
  const {restaurants, isLoading, error} = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);

  const {favourites} = useContext(FavouritesContext);
  const hasError = !!error || !!locationError;
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
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
      {!hasError && (
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
      )}
    </SafeArea>
  );
};
