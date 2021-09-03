import React from 'react';
import styled, {useTheme} from 'styled-components/native';

const sizeVarinat = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  bottom: 'marginBottom',
  left: 'marginLeft',
  right: 'marginRight',
};

const getVariant = (position, size, theme) => {
  //console.log(`${positionVariant[position]} : ${sizeVarinat[size]}`);

  const sizeIndex = sizeVarinat[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  //console.log(`${value}`);

  return `${property} : ${value}`;
};

export const SpacerView = styled.View`
  ${({variant}) => variant};
`;
export const Spacer = ({position, size, children}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
