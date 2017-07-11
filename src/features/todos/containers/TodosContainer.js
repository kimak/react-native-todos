import { connect } from "react-redux";
import { compose, lifecycle } from 'recompose';
import Todos from "../components/Todos";
import withError from "../../../shared-ui/hoc/withError";
import withLoading from "../../../shared-ui/hoc/withLoading";
import { fetchTodos } from "../../../redux/actions/todosActions";
import {
  TOGGLE_TODO,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
} from "../../../redux/actions/actionTypes";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    init: () => {
      dispatch(fetchTodos());
    },
    goBack: () => {
      ownProps.navigation.goBack();
    },
    onTodoClick: index => {
      dispatch({ type: TOGGLE_TODO, index });
    },
    onAddTodo: label => {
      dispatch({ type: ADD_TODO, label });
    },
    filterTodo(value) {
      dispatch({ type: SET_VISIBILITY_FILTER, value });
    }
  };
}

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos.results,
    filter: state.filter,
    isLoading: state.todos.isLoading,
    error: state.todos.error,
    navParams: ownProps.navigation.state.params,
  };
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.init();
    },
  }),
  withError,
  withLoading
);

export default enhance(Todos);
