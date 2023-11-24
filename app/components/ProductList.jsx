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
    <div className="flex sm:flex-row flex-wrap justify-center items-stretch p-4 bg-slate-200 my-4">
      {products.map((product) => (
        <Card productData={product} key={product.id} />
      ))}
    </div>
  );
}
