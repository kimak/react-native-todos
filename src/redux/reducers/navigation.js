import AppNavigator from "../../navigation/AppNavigator";

const ROOT_PAGE = "Home";
const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(ROOT_PAGE)
);

export default function navigationReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}
