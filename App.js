/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home/Index';
import Post from './src/components/Post/Index';
import SearchResultScreen from './src/screens/SearchResult/Index';
import DestinationSearch from './src/screens/DestinationSearch/Index';
import feed from './assets/data/feed';
const post1 = feed[2];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      {/* <HomeScreen /> */}
      {/* <Post post={post1} /> */}
      {/* <SearchResultScreen /> */}
      <DestinationSearch />
    </SafeAreaView>
  );
};

export default App;
