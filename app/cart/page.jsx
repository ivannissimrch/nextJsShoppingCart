import ProductsOnCartList from "../components/ProductsOnCartList";
import TotalAmount from "../components/TotalAmount";
import ProducstContainer from "../components/ProductsContainer";

export default function CartPage() {
  return (
    <div className="p-4 bg-slate-200 my-4 flex flex-col justify-center items-center md:p-8">
      <ProductsOnCartList />
      <TotalAmount />
    </div>
  );
}
