// Import lib for making a component
import React from 'react'
import { Text, View } from 'react-native'

// Make a component
const Header = () => { // dont use => ()
  const { textStyle } = styles // {} means object
  return <Text style={textStyle}>Albums!</Text> // JSX
}

const styles = { // like CSS
  textStyle: {
    fontSize: 20
  }
}

// Make the component available to other parts of the app
export default Header
