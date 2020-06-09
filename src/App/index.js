import React from "react";
import { CircularProgress, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useQuery } from "react-query";
import { useList } from "react-use";

import { theme } from "./theme";
import Header from "../Header";
import PizzaList from "../PizzaList";
import PopinCart from "../PopinCart";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";

  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function App() {
  const { status, data } = useQuery("pizzas", fetchPizzas);
  const [popinCartOpen, setPopinCartOpen] = React.useState(false);
  const [cart, { push, reset }] = useList([]);

  const displayPopinCart = () => {
    setPopinCartOpen(true);
  };

  const hidePopinCart = () => {
    setPopinCartOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        shoppingCartCount={cart.length}
        displayPopinCart={displayPopinCart}
      />
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} addToCart={push} />}
      <PopinCart
        open={popinCartOpen}
        hidePopinCart={hidePopinCart}
        reset={reset}
        cart={cart}
      />
    </ThemeProvider>
  );
}
