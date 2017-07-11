import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todos from "./reducers/todos";
import filter from "./reducers/filter";
import navigation from "./reducers/navigation";

let rootReducer = combineReducers({ todos, filter: filter, navigation });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
