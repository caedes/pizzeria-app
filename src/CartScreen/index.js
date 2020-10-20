import { useList } from "react-use";
import React from "react";

import PopinCart from "../PopinCart";
import Screen from "../Screen";

export default function CartScreen() {
  const [cart] = useList([]);

  return (
    <Screen>
      <PopinCart cart={cart} />
    </Screen>
  );
}
