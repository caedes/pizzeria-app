import { connect } from "react-redux";

import Cart from "./component";

const mapStateToProps = (state) => ({
  cart: state.cart.map(({ id, addedAt }) => {
    const pizza = state.pizzas.find((pizza) => pizza.id === id);

    return { ...pizza, addedAt };
  }),
});

export default connect(mapStateToProps)(Cart);
