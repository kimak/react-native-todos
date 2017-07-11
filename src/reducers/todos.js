import {
  TOGGLE_TODO,
  ADD_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR
} from "../actions/actionTypes";

const initialState = { results: [], isLoading: true, error: undefined };

function todos(state = initialState, action) {
  switch (action && action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TODOS_SUCCESS:
      return { ...state, results: action.todos, isLoading: false };
    case FETCH_TODOS_ERROR:
      return { ...state, error: action.error, isLoading: false };
    case ADD_TODO:
      const results = state.results.concat([
        { label: action.label, complete: false }
      ]);
      return { ...state, results };
    case TOGGLE_TODO:
      const newResults = state.results.concat();
      newResults[action.index].complete = !newResults[action.index].complete;
      return { ...state, results: newResults };
    default:
      return state;
  }
}

export default todos;
