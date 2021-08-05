import styled from 'styled-components/native';

//font-family: ${theme.fonts.body};
const defaultTextStyles = theme => `
  
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = theme => `
    font-size: ${theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.primary};
`;

const hint = theme => `
    font-size: ${theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.primary};
`;

const error = theme => `
    color: ${theme.colors.text.error};
    
`;

const caption = theme => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
    color: ${props => props.theme.colors.ui.primary};
`;

//  font-family: ${theme.fonts.heading};
const label = theme => `
  
    font-size: ${theme.fontSizes.label};
    font-weight: ${theme.fontWeights.medium};
    color: ${props => props.theme.colors.ui.primary};
`;

const title = theme => `
  
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
    color: ${props => props.theme.colors.ui.primary};
`;

const variants = {
  title,
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({theme}) => defaultTextStyles(theme)}
  ${({variant, theme}) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: 'body',
};
