import React, { Component } from 'react';
import { View } from 'react-native'
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import axios from 'axios'

export default class App extends Component {

    state = { albums:[] };

  componentWillMount() {
      // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      //  .then(response => this.setState({albums: response.data}))
      //  .catch(error => console.log(error))
  }

  render() {
    return (
        <View>
            <Header title={'Album List'} />
            <AlbumList />
        </View>
    );
  }
}
