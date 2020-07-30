import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

import Card from '../components/Card';
//The name here Colors, or colors doesn't matter
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText) => {
    //Here you validate, if the user types a value that is not a number
    //globally, your replace it with an empty string
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    //When a press happens I want to dissmiss the keyboard for iOS behavior
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={() => {}} color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={() => {}}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
});

export default StartGameScreen;
