import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import BuyNowButton from './BuyNowButton'

const AlbumDetail = ({album}) => {
    const {title, thumbnail_image: thumbnail, artist, image: artwork, url: link} = album
    const {
        headerContentStyle,
        thumbContainerStyle,
        thumbnailStyle,
        artworkStyle
    } = styles

    return (

        <Card>
            {/* Thumbnail */}
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
            {/* Title+Artist */}
            <CardSection>
                <View>
                    <Image
                        style={artworkStyle}
                        source={{uri: '/Users/anluoridge/Pictures/Art/IMG_2386.JPG'}}
                        //resizeMode="contain"
                    />
                </View>
            </CardSection>
            {/* Button */}
            <BuyNowButton onPress={() => Linking.openURL(link)}>{'Buy Now'}</BuyNowButton>
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