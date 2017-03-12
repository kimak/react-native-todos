import React, {PropTypes} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  filter: {
    flex: 0,
    flexDirection: "row",
  },
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#CCC",
  },
  selected: {
    backgroundColor: "#EEE",
  }
});

const TodoFilter = (props) => {

  const allStyle = (props.status==="none") ? styles.selected : "";
  const completeStyle = (props.status==="complete") ? styles.selected : "";
  const todoClass = (props.status==="todo") ? styles.selected : "";

  return <View>
      <Text>Filtres: </Text>
    <View style={styles.filter}>
      <TouchableHighlight style={[styles.item, allStyle]} onPress={props.onSelectFilter.bind(this,"none")}><Text>Tous</Text></TouchableHighlight>
      <TouchableHighlight style={[styles.item, completeStyle]} onPress={props.onSelectFilter.bind(this,"complete")}><Text>Terminé</Text></TouchableHighlight>
      <TouchableHighlight style={[styles.item, todoClass]} onPress={props.onSelectFilter.bind(this,"todo")}><Text>A faire</Text></TouchableHighlight>
    </View>
  </View>
}

TodoFilter.propTypes = {
  status: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
}

export default TodoFilter;
