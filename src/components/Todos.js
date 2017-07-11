import React from "react";
import { View, StyleSheet } from "react-native";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";

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
  }
});
const Todos = props => {
  return (
    <View style={styles.container}>
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
