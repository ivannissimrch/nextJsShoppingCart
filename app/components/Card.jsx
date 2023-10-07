"use client";
import Link from "next/link";

export default function Card({ productData }) {
  return (
    <Link href={`/products/${productData.id}`}>
      <div>
        <img src={productData.image} alt="product" width={200} height={200} />
        <div>
          <h4>{productData.title}</h4>
          <h4>{`Price : $${productData.price}`}</h4>
        </div>
      </div>
    </Link>
  );
}
