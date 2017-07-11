import { StackNavigator } from 'react-navigation';
import TodosContainer from '../features/todos/containers/TodosContainer';
import Home from '../features/home';

const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Todos: { screen: TodosContainer },
  },
  {
    headerMode: 'none',
  },
);

export default AppNavigator;
