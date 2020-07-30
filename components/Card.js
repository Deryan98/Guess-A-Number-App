import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = (props) => {
  /** props.children, the content you pass between openning and closing tags */
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    //given a width and height, you can set how the Offset should be
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    //Although elevation prop just works for Android Platforms
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
