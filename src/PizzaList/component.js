import { arrayOf, func, shape } from "prop-types";
import { isNilOrEmpty } from "ramda-adjunct";
import { Grid, Typography } from "@material-ui/core";
import React from "react";

import PizzaCard from "../PizzaCard";
import usePizzas from "../usePizzas";

export default function PizzaList({ addToCart, initPizzas }) {
  const { data: pizzas } = usePizzas();
  initPizzas(pizzas);

  if (isNilOrEmpty(pizzas))
    return (
      <Typography variant="body1" component="p">
        Pas de pizza en ce moment…
      </Typography>
    );

  return (
    <Grid container justify="space-evenly">
      {pizzas.map((pizza) => (
        <Grid key={pizza.id} item xs={6}>
          <PizzaCard {...pizza} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
}

PizzaList.propTypes = {
  pizzas: arrayOf(shape(PizzaCard.propTypes)),
  addToCart: func,
  initPizzas: func,
};

PizzaList.defaultProps = {
  pizzas: [],
  addToCart: Function.prototype,
  initPizzas: Function.prototype,
};
