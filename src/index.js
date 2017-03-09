import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
const todoData = ["Learn Javascript", "Learn ES6", "Learn React", "Learn React Native", "Learn Redux", "Learn Nodejs", "Learn by doing","Learn to teach", "Teach to learn"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
  complete: {
    textDecorationLine: "line-through",
  }
});

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      complete: false
    }
  }

  onClick(){
    this.setState({
      complete: !this.state.complete
    })
  }

  render (){

    let styleComplete;
    if(this.state.complete) styleComplete = styles.complete;

    return (<Text style={[styles.text, styleComplete]} onPress={this.onClick}>{this.props.label}</Text>);
  }
}

class TodoList extends Component {
  render() {
    return (
      <View style={styles.container}>{
        todoData.map((item, index)=>{
          return <TodoItem key={index} label={item} />
        })
      }</View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}

export default App;
