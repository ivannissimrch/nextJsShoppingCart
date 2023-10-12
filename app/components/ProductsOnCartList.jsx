"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";
import ProductOnCart from "./ProductOnCart";

export default function ProductsOnCartList() {
  const { productsOnCart } = useContext(CartContext);
  return productsOnCart.map((product) => (
    <ProductOnCart key={product.id} productData={product} />
  ));
}
