import Image from "next/image";
import HeroImage from "../public/HeroSection.jpg";
import FeaturedProductList from "./components/FeaturedProductList";

export default function Home() {
  return (
    <main>
      <section>
        <Image
          src={HeroImage}
          alt="Weekend Sale Image"
          width={1152}
          height={400}
          placeholder="blur"
        />
      </section>
      <section className="p-4 bg-slate-200 my-4 w-screen sm:max-w-6xl">
        <h1 className="text-center p-2 font-bold text-lg sm:text-4xl">
          Featured products
        </h1>
        <FeaturedProductList />
      </section>
    </main>
  );
}
