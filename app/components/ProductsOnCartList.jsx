"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";
import ProductOnCart from "./ProductOnCart";
import ProcessOrderButton from "./ProcessOrderButton";

export default function ProductsOnCartList() {
  const { productsOnCart } = useContext(CartContext);
  return (
    <>
      {productsOnCart.map((product) => (
        <ProductOnCart key={product.id} productData={product} />
      ))}
      {productsOnCart.length > 0 ? <ProcessOrderButton /> : ""}
    </>
  );
}
