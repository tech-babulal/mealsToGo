import camelize from 'camelize';
import {host, isMock} from '../../utils/env';

export const restaurantsRequest = location => {
  //console.log(mocks[location]);

  // return new Promise((resolve, reject) => {
  //   const mock = mocks[location];

  //   if (!mock) {
  //     reject('not found');
  //   }
  //   resolve(mock);
  // });

  console.log(process.env.NODE_ENV);

  return fetch(`${host}placesNearby?location=${location}&mock=${isMock}`).then(
    res => {
      return res.json();
    },
  );
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResult = results.map(restaurant => {
    // restaurant.photos = restaurant.photos.map(p => {
    //   return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    // });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      address: restaurant.vicinity,
    };
  });

  //console.log(mappedResult);
  return camelize(mappedResult);
};
// restaurantsRequest()
//   .then(restaurantsTransform)
//   .then(transformedResponse => {
//     console.log(transformedResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });
