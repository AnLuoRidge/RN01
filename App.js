import React from 'react';
import { View } from 'react-native'
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View>
        <Header title={'Album List'} />
        <AlbumList />
    </View>
)

export default App
