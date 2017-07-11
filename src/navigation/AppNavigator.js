import { StackNavigator } from 'react-navigation';
import TodosContainer from '../features/todos/containers/TodosContainer';

const AppNavigator = StackNavigator(
  {
    Todos: { screen: TodosContainer },
  },
  {
    headerMode: 'none',
  },
);

export default AppNavigator;
