import React from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeStackNavigator from 'components/navigation/home-stack-navigator';
import { COLORS } from 'constants/styles';
import styled from 'styled-components/native';



const AppContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
`;

const drawerRouteConfig = {
  Home: {
    screen: HomeStackNavigator,
  },
};






export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
<HomeStackNavigator/>
      </AppContainer>
    );
  }
}