import Product from "@/app/components/Product";

export default function ProductDetails({ params }) {
  const { productId } = params;
  const handleClick = () => {
    alert(productId);
  };
  return (
    <main>
      <Product id={productId} />
    </main>
  );
}
