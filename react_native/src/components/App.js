/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, Card, Title, Paragraph, Appbar} from 'react-native-paper';
import {FlatList, View, Linking} from 'react-native';
import courses from '../data/courses.json';
import styles from '../styles/AppStyles';

const handleClick = link => {
  Linking.canOpenURL(link).then(supported => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open that URL: " + link);
    }
  });
};

const App = () => (
  <View>
    <Appbar style={styles.bar}>
      <Appbar.Content title="Courses" />
    </Appbar>
    <FlatList
      data={courses}
      renderItem={({item}) => (
        <Card>
          <Card.Cover source={{uri: item.image}} />
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => handleClick(item.link)}>
              Tap to view course
            </Button>
          </Card.Actions>
        </Card>
      )}
    />
  </View>
);

export default App;
