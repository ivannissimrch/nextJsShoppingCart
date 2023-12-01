import Product from "@/app/components/Product";
import ProducstContainer from "@/app/components/ProductsContainer";

export default function ProductDetails({ params }) {
  const { productId } = params;
  return (
    <ProducstContainer>
      <Product id={productId} />
    </ProducstContainer>
  );
}
