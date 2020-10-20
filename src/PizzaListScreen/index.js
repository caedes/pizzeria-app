import { CircularProgress } from "@material-ui/core";

import { useQuery } from "react-query";
import React from "react";

import PizzaList from "../PizzaList";

import Screen from "../Screen";

const fetchPizzas = () => {
  const baseUrlApi =
    process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";

  return fetch(`${baseUrlApi}/pizzas`).then((response) => response.json());
};

export default function PizzaListScreen() {
  const { status, data } = useQuery("pizzas", fetchPizzas);

  return (
    <Screen>
      {status === "loading" && <CircularProgress />}
      {status === "success" && <PizzaList data={data} />}
    </Screen>
  );
}
