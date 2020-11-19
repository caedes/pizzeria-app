import { CART_ADD } from "./actions";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case CART_ADD:
      return [...state, action?.payload];

    default:
      return state;
  }
}
