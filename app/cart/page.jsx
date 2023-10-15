import ProductsOnCartList from "../components/ProductsOnCartList";
import TotalAmount from "../components/TotalAmount";

export default function CartPage() {
  return (
    <main className="flex-col justify-center items-center">
      <ProductsOnCartList />
      <TotalAmount />
    </main>
  );
}
