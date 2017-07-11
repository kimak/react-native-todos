import React from "react";
import { View, StyleSheet } from "react-native";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import { Button, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20
  },
  list: {
    flex: 1,
    flexDirection: "row"
  },
  filter: {
    flex: 0,
    marginBottom: 10
  },
  back: {
    flex: 0,
    alignItems: "flex-start",
  }
});
const Todos = props => {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Text>{props.navParams.title}</Text>
        <Button title="< Go back" onPress={props.goBack} />
      </View>
      <TodoInput onAddTodo={props.onAddTodo} />
      <View style={styles.list}>
        <TodoList
          todos={props.todos}
          filter={props.filter}
          selectItem={props.onTodoClick}
        />
      </View>
      <View style={styles.filter}>
        <TodoFilter status={props.filter} onSelectFilter={props.filterTodo} />
      </View>
    </View>
  );
};
export default Todos;
