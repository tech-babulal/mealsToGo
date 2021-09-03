import React, {useContext, useState, useEffect} from 'react';

import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

import {List, Avatar} from 'react-native-paper';

import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {launchCamera} from 'react-native-image-picker';
import {colors} from '../../../infrastructure/theme/colors';

const SettingsItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;
const SettingsBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const SettingsScreen = ({navigation}) => {
  const {onLogout, user} = useContext(AuthenticationContext);
  //console.log('UserDetails_1');

  //<TouchableOpacity onPress={() => navigation.navigate('Camera')}></TouchableOpacity>
  const [img, setImg] = useState(null);
  // //const [response, setResponse] = React.useState(null);

  useEffect(() => {
    //console.log(img.assets[0].fileName);
    //if (!img) return null;
    //console.log(img.assets[0].uri);
  }, [img]);

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity
            onPress={() => {
              //console.log();
              launchCamera(null, setImg);
            }}>
            {!img && (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            )}
            {img && (
              <Avatar.Image
                size={180}
                source={{uri: img.assets[0].uri}}

                //backgroundColor="#2182BD"
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>

        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={props => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate('Favourites')}
          />
          <Spacer />
          <SettingsItem
            title="Payment"
            left={props => (
              <List.Icon {...props} color={colors.ui.secondary} icon="cart" />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Past Orders"
            left={props => (
              <List.Icon
                {...props}
                color={colors.ui.secondary}
                icon="history"
              />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Logout"
            left={props => (
              <List.Icon {...props} color={colors.ui.secondary} icon="door" />
            )}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
