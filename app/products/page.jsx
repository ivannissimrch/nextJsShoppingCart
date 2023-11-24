import ProductList from "../components/ProductList";

export default function ProductsPage() {
  return (
    <main className="p-4 bg-slate-200 my-4 w-screen sm:max-w-6xl">
      <h1 className="text-center text-lg sm:text-4xl">All products</h1>
      <ProductList />
    </main>
  );
}
