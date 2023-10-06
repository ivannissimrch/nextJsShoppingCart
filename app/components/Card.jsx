"use client";
export default function Card({ productData }) {
  function handleClick() {
    alert(productData.id);
  }
  return (
    <div onClick={handleClick}>
      <img src={productData.image} alt="product" width={200} height={200} />
      <div>
        <h4>{productData.title}</h4>
        <h4>{`Price : $${productData.price}`}</h4>
      </div>
    </div>
  );
}
