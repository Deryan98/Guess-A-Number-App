import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginVertical: 10,
  },
});

export default Input;
