export const PIZZAS_INIT = "pizzas/init";

export const initPizzas = (pizzas) => ({
  type: PIZZAS_INIT,
  payload: { pizzas },
});
