import React, { Component } from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import TodosContainer from "./containers/TodosContainer";

import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodosContainer />
      </Provider>
    );
  }
}
