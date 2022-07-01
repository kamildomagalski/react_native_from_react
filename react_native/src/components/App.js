/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native-paper';
import {FlatList, View, StyleSheet, Text, Linking} from 'react-native';
import courses from '../data/courses.json';

const handleClick = link => {
  console.log('cilck');
  Linking.canOpenURL(link).then(supported => {
    if (supported) {
      console.log('działa');
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open that URL: " + link);
    }
  });
};

const App = () => (
  <View>
    <FlatList
      data={courses}
      renderItem={({item}) => (
        <Button onPress={() => handleClick(item.link)}>
          Tap to view course
        </Button>
      )}
    />
  </View>
);

export default App;
