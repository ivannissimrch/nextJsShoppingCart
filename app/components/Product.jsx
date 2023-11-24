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
    <div className="flex flex-col justify-center items-center bg-white sm:flex-col m-8 w-11/12 sm:w-10/12 rounded-md">
      <div className="flex flex-col justify-center items-center sm:flex-row m-8">
        <Card productData={product} key={product.id} />
        <p className="mb-4 w-40 p-2 sm:max-w-sm">{product.description}</p>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
}
