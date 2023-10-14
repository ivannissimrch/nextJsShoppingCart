"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";
import { MdShoppingCart } from "react-icons/md";

export default function Cart() {
  const { productsOnCart } = useContext(CartContext);

  const totalProducts = productsOnCart.reduce((total, product) => {
    return total + product.amount;
  }, 0);

  return (
    <span>
      <MdShoppingCart /> {totalProducts === 0 ? "" : totalProducts}
    </span>
  );
}
