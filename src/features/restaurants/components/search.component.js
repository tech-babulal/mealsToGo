import React, {useContext, useState, useEffect} from 'react';
import {Searchbar} from 'react-native-paper';

import {SearchContainer} from '../styles/restaurant-screen.styles';
import {LocationContext} from '../../../services/location/location.context';

export const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //console.log(locationContext);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
