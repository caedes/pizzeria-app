import CartScreen from "../CartScreen";
import PizzaListScreen from "../PizzaListScreen";

export default {
  home: {
    path: "/",
    component: PizzaListScreen,
  },
  cart: {
    path: "/shopping-cart",
    component: CartScreen,
  },
};
