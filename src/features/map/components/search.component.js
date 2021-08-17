import React, {useContext, useState, useEffect} from 'react';
import {Searchbar} from 'react-native-paper';

import {SearchContainer} from '../styles/map-screens.styles';
import {LocationContext} from '../../../services/location/location.context';

export const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //console.log(locationContext);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
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
