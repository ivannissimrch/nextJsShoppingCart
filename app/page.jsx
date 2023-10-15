import Image from "next/image";
import HeroImage from "../public/HeroSection.jpg";
import FeaturedProductList from "./components/FeaturedProductList";

export default function Home() {
  return (
    <main className="flex-col">
      <section className="flex justify-center items-center">
        <Image
          src={HeroImage}
          alt="Weekend Sale Image"
          width={800}
          height={400}
          placeholder="blur"
        />
      </section>
      <section className="flex-col justify-center items-center">
        <h1 className="text-center p-2">Featured products</h1>
        <FeaturedProductList />
      </section>
    </main>
  );
}
