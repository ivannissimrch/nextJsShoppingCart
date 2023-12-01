import Card from "./Card";

async function getProducts(numberOfProducst) {
  const response = await fetch(
    `https://fakestoreapi.com/products?limit=${numberOfProducst}`
  );
  if (!response.ok) {
    throw new Error("Error");
  } else {
    return response.json();
  }
}

export default async function FeaturedProductList() {
  const quantity = 5;
  const products = await getProducts(quantity);

  return (
    <>
      <h1 className="p-2 font-bold text-lg sm:text-4xl w-full text-center">
        Featured products
      </h1>
      {products.map((product) => (
        <Card productData={product} key={product.id} />
      ))}
    </>
  );
}
