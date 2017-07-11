import React, {PropTypes} from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
  },
  complete: {
    textDecorationLine: "line-through",
  }
});
const TodoItem = (props) => {

    let completeStyle;
    if(props.complete) completeStyle = styles.complete;

    return (<TouchableHighlight onPress={props.onClick} ><Text style={[styles.text, completeStyle]} >{props.label}</Text></TouchableHighlight>);
}

TodoItem.propTypes = {
  label: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  onClick: PropTypes.func,
}

export default TodoItem;
