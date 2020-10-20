import { arrayOf, func, shape } from "prop-types";
import { isNilOrEmpty } from "ramda-adjunct";
import { Grid, Typography } from "@material-ui/core";
import React from "react";

import PizzaCard from "../PizzaCard";

export default function PizzaList({ data, addToCart }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas de pizza en ce moment…
      </Typography>
    );

  return (
    <Grid container justify="space-evenly">
      {data.map((pizza) => (
        <Grid key={pizza.id} item xs={6}>
          <PizzaCard {...pizza} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
}

PizzaList.propTypes = {
  data: arrayOf(shape(PizzaCard.propTypes)),
  addToCart: func,
};

PizzaList.defaultProps = {
  data: [],
  addToCart: Function.prototype,
};
