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
    <div className="flex flex-col justify-center items-center bg-white m-4 rounded-md sm:min-w-full">
      <div className="flex flex-col justify-center items-center sm:flex-row m-4 sm:min-w-full">
        <Card productData={product} key={product.id} />
        <p className="mb-4 w-40  sm:w-9/12 sm:p-4 overflow-x-auto sm:scroll-m-0">
          {product.description}
        </p>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
}
