import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section>
        <Image
          src="/HeroSection.jpg"
          alt="Weekend Sale"
          width={500}
          height={400}
        />
      </section>
      <h1>Featured products</h1>
      <p>Display List of Featured Products</p>
    </main>
  );
}
