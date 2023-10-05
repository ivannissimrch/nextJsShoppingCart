import Image from "next/image";
import HeroImage from "../public/HeroSection.jpg";

export default function Home() {
  return (
    <main>
      <section>
        <Image
          src={HeroImage}
          alt="Weekend Sale Image"
          width={800}
          height={400}
          placeholder="blur"
        />
      </section>
      <h1>Featured products</h1>
      {/* <ProductList /> */}
    </main>
  );
}
