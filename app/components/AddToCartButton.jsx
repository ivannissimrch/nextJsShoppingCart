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
    <Link onClick={handleClick} href="/cart">Add to Cart</Link> 
  );
}
