/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//core components
import React from 'react';
import {StyleSheet, View} from 'react-native';
//custom components
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    /* In this case when applying flex 1 to 
    the root component, it takes the full screen,
    in other words it takes full width and height */
    flex: 1,
  },
});
