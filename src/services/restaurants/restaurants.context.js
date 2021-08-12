import React, {useState, createContext, useEffect, useMemo} from 'react';
import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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
    retriveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{restaurants: restaurants, isLoading: isLoading, error: error}}>
      {children}
    </RestaurantsContext.Provider>
  );
};
