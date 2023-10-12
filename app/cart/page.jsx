import ProductsOnCartList from "../components/ProductsOnCartList";
import TotalAmount from "../components/TotalAmount";

export default function CartPage() {
  return (
    <main>
      <ProductsOnCartList />
      <TotalAmount />
    </main>
  );
}
