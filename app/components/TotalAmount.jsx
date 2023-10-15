"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function TotalAmount() {
  const { productsOnCart } = useContext(CartContext);

  const totalAmount = productsOnCart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

  if (totalAmount === 0) {
    return "Cart is empty";
  } else {
    return (
      <div className="flex justify-center items-center p-2">
        Total Amount : {totalAmount.toFixed(2)}
      </div>
    );
  }
}
