"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";
import { MdAdd, MdRemove } from "react-icons/md";

export default function ProductOnCart({ productData }) {
  const { deleteProduct, editProductAmount } = useContext(CartContext);

  const { amount } = productData;

  const handleDecreaseQuantity = () => {
    if (amount <= 1) {
      deleteProduct(productData);
    } else {
      editProductAmount(productData, amount - 1);
    }
  };

  const handleIncreaseQuantity = (event) => {
    editProductAmount(productData, amount + 1);
  };

  const handleDelete = () => {
    deleteProduct(productData);
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 p-4 bg-white rounded-md">
      <Image src={productData.image} alt="product" width={200} height={200} />
      <div className="flex flex-col justify-center items-center mt-2">
        <h4>{`Price : $${productData.price}`}</h4>
        <label> Quantity</label>
        <div>
          <button onClick={handleDecreaseQuantity} className="p-2">
            <MdRemove />
          </button>
          <label className="p-2">{amount}</label>
          <button onClick={handleIncreaseQuantity} className="p-2">
            <MdAdd />
          </button>
        </div>
        <button
          onClick={handleDelete}
          name={productData.title}
          class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
