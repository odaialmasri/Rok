# Netflix Example  App

This is a sample React Native app that we can build and run with Expo  that showcases many of the components that you all will be using in your apps! Please take a look at the code to understand how these components work, and feel free to use this as the base for your projects.

## Get Started
To run the app on your phone, run the following:

`git clone git@github.com:WeCodeGaza/netflix-example.git`

`cd netflix-example`

`npm install`

`expo start`

Then, you should be able to scan the QR code or just open the app using the Expo Client on your phone.

## Understanding the code
The layout of the code is:

.  
+-- src: this is where the main code is   
|...+-- components: main sections of code  
|...|...+-- common  
|...|...|...+-- header.js: header code  
|...|...+-- navigation  
|...|...|...+-- home-stack-navigation.js   
|...|...+-- screens:  
|...|...|...+-- home-screen.js: the Home screen  
|...|...|...+-- show-details-screen.js: detailed Movie page  
|...+-- constants: keep constants referred to throughout code  
|...|...+-- styles.js: various style constants, like colors   
|...+-- data: application data  
|...|...+-- data.js: hard-coded Netflix movie data  
+-- assets : image assets  
+-- App.js: main application file  
+-- app.json: configuration information  
+-- package.json: npm info  

A good place to start may be looking at `home-screen.js` and `show-details-screen.js`.
Then, see if you can tell how the hamburger menu, or drawer menu, works!

# Making your own edits
Feel free to change the assets, colors, and layout of this app to fit what you're  looking for. Key functionality to pay mind to is any carousels or menus that you see, and also noting how we handle navigating between screens (how does the app switch between the home and details screen)?

## Questions?
Always Google your questions first! There are tons of great React Native resources online, and Brad and I have compiled a few here for common components.

### General Resources
[React Native Express](http://www.reactnativeexpress.com/), good for looking at examples of the various components and being able to play around. 

[Snack by Expo](https://snack.expo.io/), online playground to test React code. Also great to search for examples! 

[React Native Apps](https://github.com/ReactNativeNews/React-Native-Apps), great list of example apps. 

### Common Components

[Tooltip](https://github.com/CompanyCam/react-native-walkthrough-tooltip)

[Maps](https://github.com/react-community/react-native-maps) 

[Google Maps with React](https://codeburst.io/react-native-google-map-with-react-native-maps-572e3d3eee14) 

[Snap Carousel](https://www.npmjs.com/package/react-native-snap-carousel) 

[More Carousels](https://blog.expo.io/introducing-sideswipe-a-cross-platform-carousel-for-react-native-8b9a0f18df53) 

[Custom Drawer Menus](https://codeburst.io/custom-drawer-using-react-navigation-80abbab489f7) 
 
