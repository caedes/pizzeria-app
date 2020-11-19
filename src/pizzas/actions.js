export const INIT_PIZZAS = "INIT_PIZZAS";

export const initPizzas = (pizzas) => ({
  type: INIT_PIZZAS,
  payload: { pizzas },
});
