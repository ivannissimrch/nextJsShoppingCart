"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { productsOnCart } = useContext(CartContext);
  
  const totalProducts = productsOnCart.reduce((total, product) => {
    return total + product.amount;
  }, 0);

  return  <span>Cart: {totalProducts}</span>;
}
