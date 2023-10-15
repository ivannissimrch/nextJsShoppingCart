"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";
import ProductOnCart from "./ProductOnCart";
import ProcessOrderButton from "./ProcessOrderButton";

export default function ProductsOnCartList() {
  const { productsOnCart } = useContext(CartContext);
  return (
    <div className="flex-col justify-center items-center p-4">
      {productsOnCart.map((product) => (
        <ProductOnCart key={product.id} productData={product} />
      ))}
      {productsOnCart.length > 0 ? <ProcessOrderButton /> : ""}
    </div>
  );
}
