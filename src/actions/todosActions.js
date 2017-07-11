import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR
} from "../actions/actionTypes";

/* action creator used by redux-thunk middleware */
export function fetchTodos() {
  return dispatch => {

    dispatch({ type: FETCH_TODOS_REQUEST });

    fetch("https://api.myjson.com/bins/9l2ez")
      .then(response => {
        return response.json();
      })
      .then(results => {
        dispatch({ type: FETCH_TODOS_SUCCESS, todos: results.todos });
      })
      .catch(error => {
        dispatch({ type: FETCH_TODOS_ERROR, error: { message: error.message }, });
      });
  };
}
