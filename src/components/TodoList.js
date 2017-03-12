import React, {PropTypes} from 'react';
import TodoItem from "./TodoItem";
import { View } from 'react-native';

const TodoList = (props) => {
  return <View>
  {
    props.todos.map((item, index)=>{

      const isTodoFiltered = (props.filter==="todo" && item.complete===true);
      const isCompleteFiltered = (props.filter==="complete" && item.complete===false);
      if(isTodoFiltered || isCompleteFiltered) return null;

      return <TodoItem key={index}
                       label={item.label}
                       complete={item.complete}
                       onClick={props.selectItem.bind(this,index)}
            />
    })
  }</View>;
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  selectItem: PropTypes.func.isRequired,
}

export default TodoList;
