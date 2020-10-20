import React from "react";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { func, number } from "prop-types";
import { Link } from "react-router-dom";

import useStyles from "./styles";

export default function Header({ shoppingCartCount, displayPopinCart }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          className={classes.title}
          to="/"
        >
          Pizzeria Nala
        </Typography>
        <IconButton
          aria-label={`${shoppingCartCount} pizzas`}
          color="inherit"
          component={Link}
          to="/cart"
        >
          <Badge badgeContent={shoppingCartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  shoppingCartCount: 0,
  displayPopinCart: Function.prototype,
};

Header.propTypes = {
  shoppingCartCount: number,
  displayPopinCart: func,
};
