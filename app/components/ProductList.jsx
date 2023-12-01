import Card from "./Card";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Error");
  } else {
    return response.json();
  }
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <>
      <h1 className="p-2 font-bold text-lg sm:text-4xl w-full text-center">
        All products
      </h1>
      {products.map((product) => (
        <Card productData={product} key={product.id} />
      ))}
    </>
  );
}
