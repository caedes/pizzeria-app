import { arrayOf, number, string, shape } from "prop-types";
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { isEmpty } from "ramda";

import Price from "../Price";

export default function Cart({ cart }) {
  if (isEmpty(cart)) return <Typography>Pas de pizzas</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="Ma commande de pizzas">
        <TableHead>
          <TableRow>
            <TableCell>Pizza</TableCell>
            <TableCell align="right">Prix</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(({ addedAt, name, price }) => (
            <TableRow key={addedAt}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">
                <Price value={price} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Cart.propTypes = {
  cart: arrayOf(
    shape({
      id: number,
      name: string,
      price: number,
      addedAt: number,
    })
  ),
};

Cart.defaultProps = {
  cart: [],
};
