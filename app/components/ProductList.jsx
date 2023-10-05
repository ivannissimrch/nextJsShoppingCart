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
    <div>
      {products.map((product) => (
        <Card productData={product} key={product.id} />
      ))}
    </div>
  );
}
