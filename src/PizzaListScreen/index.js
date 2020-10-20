import { CircularProgress } from "@material-ui/core";

import React from "react";

import PizzaList from "../PizzaList";

import usePizzas from "../usePizzas";
import Screen from "../Screen";

export default function PizzaListScreen() {
  const { status, data: pizzas } = usePizzas();

  return (
    <Screen>
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={pizzas} />}
    </Screen>
  );
}
