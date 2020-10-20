import { useList } from "react-use";
import React from "react";

import Cart from "../Cart";
import Screen from "../Screen";

export default function CartScreen() {
  const [cart] = useList([]);

  return (
    <Screen>
      <Cart cart={cart} />
    </Screen>
  );
}
