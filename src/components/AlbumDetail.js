import React from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({album}) => {
    const {title, thumbnail_image: thumbnail, artist, image: artwork} = album
    const {
        headerContentStyle,
        thumbContainerStyle,
        thumbnailStyle,
        artworkStyle
    } = styles

console.log(artwork)
    return (

        <Card>
            <CardSection>
                <View style={thumbContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <View>
                    <Image
                        style={artworkStyle}
                        source={{uri: artwork}}
                        //resizeMode="contain"
                    />
                </View>
            </CardSection>
        </Card>
    )
}

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    artworkStyle: {
        height: 300,
        // flex: 1, todo to fix
        width: 300
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    }
}


export default AlbumDetail