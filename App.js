import React from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeStackNavigator from 'components/navigation/home-stack-navigator';
import { COLORS } from 'constants/styles';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, TextInput, ScrollView, StatusBar, Button, FlatList } from 'react-native';
import Playquiz from 'components/screens/playquiz';
import { mainStyles } from 'styles/general';

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
  // <View style={mainStyles.container}>
  //   <Playquiz />
  // </View>
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <AppContainer>
        <HomeStackNavigator/>
      </AppContainer>
    );
  }
}
