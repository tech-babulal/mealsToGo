import React, {useState, createContext, useEffect} from 'react';
import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();
export const LocationContextProvider = ({children}) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState('San Francisco');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!keyword.length) {
      //don't do anything

      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setIsLoading(false);

        setLocation(result);
        // console.log(result);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
        //console.log(err);
      });
  }, [keyword]);

  const onSearch = searchkeyword => {
    setIsLoading(true);
    setKeyword(searchkeyword);
    //console.log(searchkeyword);
  };

  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      locationRequest()
        .then(locationTransform)
        .then(result => {
          //console.log(transformedResponse);
          setIsLoading(false);

          setLocation(result);
          // console.log(result);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 5000);
  };

  useEffect(() => {
    retriveRestaurants();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location: location,
        isLoading: isLoading,
        error: error,
        search: onSearch,
        keyword: keyword,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
