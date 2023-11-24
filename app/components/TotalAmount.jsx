"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function TotalAmount() {
  const { productsOnCart } = useContext(CartContext);

  const totalAmount = productsOnCart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

  if (totalAmount === 0) {
    return (
      <h1 className="flex justify-center items-center text-lg">
        Cart is empty
      </h1>
    );
  } else {
    return (
      <div className="flex justify-center items-center text-lg">
        Total Amount : {totalAmount.toFixed(2)}
      </div>
    );
  }
}
