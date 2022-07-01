/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import courses from '../data/courses.json';

const App = () => (
  <View>
    <FlatList
      data={courses}
      renderItem={({item}) => <Text>{item.title}</Text>}
    />
  </View>
);

export default App;
