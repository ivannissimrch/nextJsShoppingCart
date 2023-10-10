import Link from "next/link";
import Card from "./Card";

async function getProducts(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Error");
  } else {
    return response.json();
  }
}

export default async function Product({ id }) {
  const product = await getProducts(id);

  return (
    <div>
      <Card productData={product} key={product.id} />
      <p>{product.description}</p>
      <Link href={{ pathname: "/cart", query: product }}>Add To Cart</Link>
    </div>
  );
}
