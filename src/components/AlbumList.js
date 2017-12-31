import React from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail';
import axios from 'axios'

export default class AlbumList extends React.Component {
    state = {albums: []};

    componentWillMount() {
        // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        //  .then(response => this.setState({albums: response.data}))
        //  .catch(error => console.log(error))
        this.setState({
            albums: [
                {
                    "artist": "Taylor Swift",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
                    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
                    "title": "Taylor Swift",
                    "url": "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
                },
                {
                    "artist": "Taylor Swift",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
                    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
                    "title": "Fearless",
                    "url": "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
                },
                {
                    "artist": "Taylor Swift",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
                    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
                    "title": "Speak Now",
                    "url": "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
                },
                {
                    "artist": "Taylor Swift",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
                    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
                    "title": "Red",
                    "url": "https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU",
                },
                {
                    "artist": "Taylor Swift",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
                    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg",
                    "title": "1989",
                    "url": "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
                }
            ]
        })
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>)
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}
