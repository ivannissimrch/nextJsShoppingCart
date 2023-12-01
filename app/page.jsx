import Image from "next/image";
import HeroImage from "../public/HeroSection.jpg";
import FeaturedProductList from "./components/FeaturedProductList";
import ProducstContainer from "./components/ProductsContainer";

export default function Home() {
  return (
    <>
      <section>
        <Image
          src={HeroImage}
          alt="Weekend Sale Image"
          width={1152}
          height={400}
          placeholder="blur"
        />
      </section>
      <ProducstContainer>
        <FeaturedProductList />
      </ProducstContainer>
    </>
  );
}
