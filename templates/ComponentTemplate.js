import React from "react";
import { StyleSheet, View } from "react-native";

const ComponentTemplate = (props) => {
  return <View style={styles.screen}></View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ComponentTemplate;
