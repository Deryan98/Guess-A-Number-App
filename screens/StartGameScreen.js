import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    //when using pixels, consider using the maxWidth prop
    width: 300,
    //maxWidth triggers when a device is too small that doesn't reach the width property,
    //So it will take the 80% of the small screen device
    maxWidth: '80%',
    //we center items horizontally that is the cross axis in this case
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    // to position the buttons to the left and right respectively with some space
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;
