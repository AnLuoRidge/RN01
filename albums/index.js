// Index.ios.js - place code in here for iOS

// Import a lib to help create a component
import React from 'react';
// import ReactNative from 'react-native';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';

// Create a component
// Create a component
const App = () => (
    <Header />
);

// const App = () => {
//   return (
//       <Text>Some Text </Text>
//   )
// };


// Render it to the device
AppRegistry.registerComponent('albums', () => App);



/*import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('albums', () => App);
*/