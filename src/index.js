import React, { Component } from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import Navigation from "./navigation";

import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
