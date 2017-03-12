/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Todo from './src/containers/Todo';

export default class reactNativeTodos extends Component {
  render() {
    return (
      <Todo />
    );
  }
}

AppRegistry.registerComponent('reactNativeTodos', () => reactNativeTodos);
