/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//core components
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
//custom components
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  //the first time, it always will render this screen
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  //because the first time userNumber will not be defined,
  //but after userNumber is defined when the user selects in the StartGameScreen
  //then the GameScreen component will be loaded
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
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
