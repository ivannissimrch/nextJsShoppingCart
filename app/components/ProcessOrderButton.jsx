"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";

export default function ProcessOrderButton() {
  const { deleteAllProducts } = useContext(CartContext);
  const handleClick = () => {
    deleteAllProducts();
  };
  return (
    <div className="flex justify-center">
      <Link
        onClick={handleClick}
        href="/checkout"
        className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      >
        {" "}
        Checkout
      </Link>
    </div>
  );
}
