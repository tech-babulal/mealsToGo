import React, {useState, createContext, useEffect, useMemo} from 'react';
import {useContext} from 'react/cjs/react.development';
import {LocationContext} from '../location/location.context';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retriveRestaurants = location => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then(result => {
          //console.log(transformedResponse);
          setIsLoading(false);

          setRestaurants(result);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 5000);
  };

  useEffect(() => {
    //const locationString = `${location.lat},${location.lng} `;

    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString);
      retriveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{restaurants: restaurants, isLoading: isLoading, error: error}}>
      {children}
    </RestaurantsContext.Provider>
  );
};
