import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import pizzasReducer from "../pizzas/reducer";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware()));
