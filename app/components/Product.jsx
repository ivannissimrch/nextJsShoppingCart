// "use client";
import Card from "./Card";

async function getProducts(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Error");
  } else {
    return response.json();
  }
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Product({ id }) {
  const product = await getProducts(id);
  // const handleClick = () => {
  //Add product to cart
  //navigate to cart
  // };
  return (
    <div>
      <Card productData={product} key={product.id} />
      <p>{product.description}</p>
      {/* <button onClick={handleClick}>Add to Cart</button> */}
    </div>
  );
}
