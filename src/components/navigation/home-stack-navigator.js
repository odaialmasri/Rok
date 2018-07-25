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
import PyhtonBasics from 'components/screens/PyhtonBasics';
import PyhtonExampels from 'components/screens/PyhtonExampels';
import HtmlCssBasics from 'components/screens/HtmlCssBasics';
import HtmlCssExampels from 'components/screens/HtmlCssExampels';
import JavaScriptBasics from 'components/screens/JavaScriptBasics';
import JavaScriptExampels from 'components/screens/JavaScriptExampels';

const HomeStackNavigator = createStackNavigator(
{
	Main: {screen: LevelsScreen},
	ShowDetails: {screen: ShowDetailsScreen},
	browse:{screen:pythonIntro},
	HtmlCssScreen:{screen:HtmlCssIntro},
	JsScreen:{screen:JsIntro},
	Playquiz:{screen:Playquiz},
	PyhtonBasics:{screen:PyhtonBasics},
	PyhtonExampels:{screen:PyhtonExampels},
	HtmlCssBasics:{screen:HtmlCssBasics},
	HtmlCssExampels:{screen:HtmlCssExampels},
	JavaScriptBasics:{screen:JavaScriptBasics},
	JavaScriptExampels:{screen:JavaScriptExampels},

},
{
	initialRouteName: 'Main',
	headerMode: 'none',
}
);

export default HomeStackNavigator;