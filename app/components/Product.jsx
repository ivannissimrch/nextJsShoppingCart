import Card from "./Card";
import AddToCartButton from "./AddToCartButton";

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
    <div className="flex-col justify-center items-center w-40">
      <Card productData={product} key={product.id} />
      <p className="w-40 mb-4 ">{product.description}</p>
      <AddToCartButton product={product} />
    </div>
  );
}
