import React from 'react';
import { View } from 'react-native'
import Header from './src/components/header';
import Footer from './src/components/Footer'
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{flex:1}}>
        <Header title={'Album List'} />
        <AlbumList />
        <Footer/>
    </View>
)

export default App
