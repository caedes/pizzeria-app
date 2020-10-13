import { arrayOf, func, number, string } from "prop-types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";

import { PIZZAS_MAX_COUNT } from "../pizzas";
import useCounter from "../useCounter";
import Price from "../Price";

const imageSize = 175;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(2)}px`,
  },
  button: {
    flexGrow: 1,
  },
}));

export default function PizzaCard({
  id,
  name,
  ingredients,
  price,
  imageUrl,
  addToCart,
}) {
  const classes = useStyles();

  const [pizzaCount, { decrement, increment }] = useCounter(
    1,
    1,
    PIZZAS_MAX_COUNT
  );

  return (
    <Card className={classes.root}>
      {imageUrl && (
        <CardMedia
          component="img"
          alt={name}
          height={imageSize}
          image={imageUrl}
          title={name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients.join(", ")}
        </Typography>
        <Typography variant="h4" component="p">
          <Price value={price} />
        </Typography>
        <IconButton aria-label="moins" onClick={decrement}>
          <IndeterminateCheckBox fontSize="inherit" />
        </IconButton>
        <span>{pizzaCount}</span>
        <IconButton aria-label="plus" onClick={increment}>
          <AddBox fontSize="inherit" />
        </IconButton>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={() => {
            addToCart({ id, name, price, addedAt: Date.now() });
          }}
        >
          Ajouter
        </Button>
      </CardActions>
    </Card>
  );
}

PizzaCard.propTypes = {
  id: number,
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
  addToCart: func,
};

PizzaCard.defaultProps = {
  imageUrl: null,
  addToCart: Function.prototype,
};
