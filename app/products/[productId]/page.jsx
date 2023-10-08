import Product from "@/app/components/Product";

export default function ProductDetails({ params }) {
  const { productId } = params;
  return (
    <main>
      <Product id={productId} />
    </main>
  );
}
