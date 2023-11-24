import Product from "@/app/components/Product";

export default function ProductDetails({ params }) {
  const { productId } = params;
  return (
    <main className="min-h-screen w-screen sm:max-w-6xl flex items-center justify-center bg-slate-200 m-8  md:p-8">
      <Product id={productId} />
    </main>
  );
}
