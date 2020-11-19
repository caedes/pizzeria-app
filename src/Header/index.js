import { connect } from "react-redux";

import Header from "./component";

const mapStateToProps = (state) => ({ shoppingCartCount: state.cart.length });

export default connect(mapStateToProps)(Header);
