import { CircularProgress } from "@material-ui/core";

import React from "react";

import PizzaList from "../PizzaList";

import usePizzas from "../usePizzas";
import Screen from "../Screen";

export default function PizzaListScreen() {
  const { isFetching, data: pizzas } = usePizzas();

  return (
    <Screen>
      {isFetching && <CircularProgress />}
      <PizzaList data={pizzas} />
    </Screen>
  );
}
