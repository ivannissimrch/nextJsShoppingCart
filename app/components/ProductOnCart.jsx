"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";

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
    <div>
      <Image src={productData.image} alt="product" width={200} height={200} />
      <h4>{`Price : $${productData.price}`}</h4>
      <div>
        <div>
          <label> Quantity</label>
          <div>
            <button onClick={handleDecreaseQuantity}>
              <MdRemove />
            </button>
            <label>{amount}</label>
            <button onClick={handleIncreaseQuantity}>
              <MdAdd />
            </button>
          </div>
        </div>
        <button onClick={handleDelete} name={productData.title}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
