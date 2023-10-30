import ProductsOnCartList from "../components/ProductsOnCartList";
import TotalAmount from "../components/TotalAmount";

export default function CartPage() {
  return (
    <main className="flex flex-col justify-center">
      <ProductsOnCartList />
      <TotalAmount />
    </main>
  );
}
