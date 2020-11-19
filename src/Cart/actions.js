export const CART_ADD = "cart/add";

export const addToCart = (id) => ({
  type: CART_ADD,
  payload: { id, addedAt: Date.now() },
});
