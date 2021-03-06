import { PIZZAS_INIT } from "./actions";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case PIZZAS_INIT:
      return action?.payload?.pizzas || state;

    default:
      return state;
  }
}
