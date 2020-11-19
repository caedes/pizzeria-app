import { useQuery } from "react-query";

import nalaFetch from "../nalaFetch";

export default function usePizzas() {
  return useQuery("pizzas", nalaFetch("/pizzas"), {
    refetchOnWindowFocus: false,
  });
}
