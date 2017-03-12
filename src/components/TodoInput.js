import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, View, TextInput, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    paddingLeft: 5,
  },
  button: {
    flex: 0,
    marginLeft: 5,
    marginRight: 5,
  },
});
class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      inputValue: "",
    }
  }

  onInputChange(text){
    this.setState({
      inputValue: text,
    });
  }

  onClickButton(){
    this.setState({
      inputValue: "",
    });
    this.props.onAddTodo(this.state.inputValue);
  }

  render() {
    return (
        <View style={styles.container}>
          <TextInput
              style={styles.input}
              value={this.state.inputValue}
              onChangeText={this.onInputChange}
          />
          <TouchableHighlight
              style={styles.button}
              onPress={this.onClickButton}>
              <Text>Ajouter</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}


export default TodoInput;
