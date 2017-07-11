import React, { PropTypes } from "react";
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  }
});
const Error = props =>
  <Text style={styles.root}>
    Error! {props.message}
  </Text>

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default Error;
