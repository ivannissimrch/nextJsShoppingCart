"use client";
import Link from "next/link";
import Image from "next/image";

export default function Card({ productData }) {
  return (
    <Link
      href={`/products/${productData.id}`}
      className="flex justify-center items-stretch p-2"
    >
      <div className="flex flex-col justify-center items-center p-4 bg-white rounded-md">
        <Image src={productData.image} alt="product" width={200} height={200} />
        <div className="pt-2">
          <h4 className="w-40">{productData.title}</h4>
          <h4 className="w-40">{`Price : $${productData.price}`}</h4>
        </div>
      </div>
    </Link>
  );
}
