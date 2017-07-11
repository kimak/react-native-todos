import React, { PropTypes } from "react";
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  }
});
const Loading = props =>
  <Text style={styles.root}>
    Loading...
  </Text>


export default Loading;
