import ProductsOnCartList from "../components/ProductsOnCartList";
import TotalAmount from "../components/TotalAmount";

export default function CartPage() {
  return (
    <main className="p-4 bg-slate-200 my-4 w-screen min-h-screen sm:max-w-6xl flex flex-col justify-center items-center">
      <ProductsOnCartList />
      <TotalAmount />
    </main>
  );
}
