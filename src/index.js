import React, { Component } from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import TodosContainer from "./features/todos/containers/TodosContainer";

import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodosContainer />
      </Provider>
    );
  }
}
