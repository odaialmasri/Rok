// App navigator (screen transitions)

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from 'components/screens/home-screen';
import ShowDetailsScreen from 'components/screens/show-details-screen';

const HomeStackNavigator = createStackNavigator(
{
	Main: {screen: HomeScreen},
	ShowDetails: {screen: ShowDetailsScreen},
},
{
	initialRouteName: 'Main',
	headerMode: 'none',
}
);

export default HomeStackNavigator;