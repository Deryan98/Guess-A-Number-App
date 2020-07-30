import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
//The name here Colors, or colors doesn't matter
import Colors from '../constants/colors';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    //Here you validate, if the user types a value that is not a number
    //globally, your replace it with an empty string
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  //We're going to give the user the opportunity to confirm if he wants to start
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    //Adding some validation before confirming
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99',
        //free predefined identifiers
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue(''); //reset the entered value
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" />
      </Card>
    );
  }

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
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
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
  chosenNumber: {
    flexDirection: 'row',
    width: 300,
    maxWidth: '80%',
    justifyContent: 'center',
    backgroundColor: 'green',
    marginTop: 30,
    elevation: 6,
    borderRadius: 15,
  },
  chosenTextNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default StartGameScreen;
