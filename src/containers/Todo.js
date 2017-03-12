import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import TodoInput from "../components/TodoInput";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  list: {
    flex: 1,
    flexDirection: "row",
  },
  filter: {
    flex: 0,
    marginBottom: 10,
  }
});
export default class Todo extends Component {

  constructor(props){
    super(props);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.selectFilter = this.selectFilter.bind(this);
    this.state = {
      todos: [
        {label: "Learn Javascript", complete: true},
        {label: "Learn ES6", complete: true},
        {label: "Learn React", complete: false},
        {label: "Learn React Native", complete: false},
        {label: "Learn Nodejs", complete: false},
        {label: "Learn by doing", complete: false},
        {label: "Learn to teach", complete: false},
        {label: "Teach to learn", complete: false},
      ],
      filter: "none",
    }
  }

  onAddTodo(value){
    const todos = this.state.todos;
    todos.push({
      label: value,
      complete: false,
    });

    this.setState({
      todos,
    });
  }

  toggleItem(index){
    const selectedTodo = this.state.todos[index];
    selectedTodo.complete=!selectedTodo.complete;
    this.setState({
      todos: this.state.todos,
    });
  }

  selectFilter(status){
    this.setState({
      filter: status,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TodoInput onAddTodo={this.onAddTodo} />
        <View style={styles.list}>
          <TodoList todos={this.state.todos} filter={this.state.filter} selectItem={this.toggleItem} />
        </View>
        <View style={styles.filter}>
          <TodoFilter status={this.state.filter} onSelectFilter={this.selectFilter} />
        </View>
      </View>
    );
  }
}
