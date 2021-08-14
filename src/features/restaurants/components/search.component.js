import React, {useContext, useState} from 'react';
import {Searchbar} from 'react-native-paper';

import {SearchContainer} from '../styles/restaurant-screen.styles';
import {LocationContext} from '../../../services/location/location.context';

export const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //console.log(locationContext);

  return (
    <SearchContainer>
      <Searchbar
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
