"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function TotalAmount() {
  const { productsOnCart } = useContext(CartContext);
  console.log(productsOnCart);

  const totalAmount = productsOnCart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

  if (totalAmount === 0) {
    return "Cart is empty";
  } else {
    return <span>Total Amount : {totalAmount.toFixed(2)}</span>;
  }
}
