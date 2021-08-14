import {mockImages, mocks} from './mock';
import camelize from 'camelize';

export const restaurantsRequest = location => {
  //console.log(mocks[location]);

  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResult = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map(p => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
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
