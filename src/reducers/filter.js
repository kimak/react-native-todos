const initialState = "none";
import { SET_VISIBILITY_FILTER } from "../actions/actionTypes";

function visibilityFilter(state = initialState, action) {
  if (action && action.type === SET_VISIBILITY_FILTER) {
    return action.value;
  } else {
    return state;
  }
}
export default visibilityFilter;
