"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";

export default function AddToCartButton({ product }) {
  const { addProductToCart } = useContext(CartContext);

  const handleClick = () => {
    addProductToCart(product);
  };
  return (
    <Link
      onClick={handleClick}
      href="/cart"
      class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    >
      Add to Cart
    </Link>
  );
}
