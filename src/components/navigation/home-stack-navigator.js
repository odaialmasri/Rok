// App navigator (screen transitions)

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from 'components/screens/home-screen';
import ShowDetailsScreen from 'components/screens/show-details-screen';
import LevelsScreen from 'components/screens/levels';
import pythonIntro from 'components/screens/python-intro';
import HtmlCssIntro from 'components/screens/html-css-intro';
import JsIntro from 'components/screens/js-intro';
import Playquiz from 'components/screens/playquiz';


const HomeStackNavigator = createStackNavigator(
{
	Main: {screen: LevelsScreen},
	ShowDetails: {screen: ShowDetailsScreen},
	browse:{screen:pythonIntro},
	HtmlCssScreen:{screen:HtmlCssIntro},
	JsScreen:{screen:JsIntro},
	Playquiz:{screen:Playquiz},
},
{
	initialRouteName: 'Main',
	headerMode: 'none',
}
);

export default HomeStackNavigator;