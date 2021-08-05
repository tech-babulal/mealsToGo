import React from 'react';

import {SvgXml} from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {Spacer} from '../../../components/spacer/spacer.component';
import {Text} from '../../../components/typography/text.component';
import {
  Icon,
  RestaurantCard,
  Section,
  Rating,
  SectionEnd,
  RestaurantCardCover,
  Info,
} from '../styles/restaurant-info-card.styles';

//font-family:${props => props.theme.fonts.body}

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      'https://img.etimg.com/thumb/msid-82666514,width-1200,height-900/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
      'https://img.etimg.com/thumb/msid-74723587,width-650,imgsize-245027,,resizemode-4,quality-100/talli-turmeric-fb.jpg',
    ],
    address = '1-98/90/5, Ayyappa Society Road, Sai Nagar, Mahdapur, Hyderabad-500081, Telangana, India',
    isOpenNow = true,
    rating = 3.2,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  //console.log(ratingArray);

  return (
    <RestaurantCard elevation={5}>
      <Info>
        <RestaurantCardCover key={name} source={{uri: photos[0]}} />
        <Text variant="title">{name}</Text>

        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{uri: icon}} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Text variant="label">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
