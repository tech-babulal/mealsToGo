import React from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  padding: ${props => props.theme.space[3]};
  color: ${props => props.theme.colors.ui.primary};
`;

//font-family:${props => props.theme.fonts.body}

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      'https://img.etimg.com/thumb/msid-82666514,width-1200,height-900/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
      'https://img.etimg.com/thumb/msid-74723587,width-650,imgsize-245027,,resizemode-4,quality-100/talli-turmeric-fb.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporary = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
