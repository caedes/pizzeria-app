import React from "react";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { func, number } from "prop-types";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

export default function Header({ shoppingCartCount, displayPopinCart }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Pizzeria Nala
        </Typography>
        <IconButton
          aria-label={`${shoppingCartCount} pizzas`}
          color="inherit"
          onClick={displayPopinCart}
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
