import { connect } from "react-redux";

import PizzaList from "./component";
import { initPizzas } from "../pizzas/actions";

const mapDispatchToProps = { initPizzas };

export default connect(null, mapDispatchToProps)(PizzaList);
