import { connect } from "react-redux";

import PizzaList from "./component";
import { initPizzas } from "../pizzas/actions";
import { addToCart } from "../Cart/actions";

const mapDispatchToProps = { addToCart, initPizzas };

export default connect(null, mapDispatchToProps)(PizzaList);
