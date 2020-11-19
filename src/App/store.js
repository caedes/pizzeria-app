import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import pizzasReducer from "../pizzas/reducer";
import cartReducer from "../Cart/reducer";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware()));
