import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";

import { theme } from "./theme";
import CartScreen from "../CartScreen";
import PizzaListScreen from "../PizzaListScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route exact path="/" component={PizzaListScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Router>
    </ThemeProvider>
  );
}
