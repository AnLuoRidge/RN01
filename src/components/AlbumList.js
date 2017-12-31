import React from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

export default class AlbumList extends React.Component {
    state = { albums:[] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({albums: response.data}))
         .catch(error => console.log(error))
    }

    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>)
    }

    render() {
        console.log(this.state)
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}
