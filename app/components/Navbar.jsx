import Link from "next/link";
import Cart from "./Cart";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="flex">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">
            <Cart />
          </Link>
        </ul>
      </nav>
    </header>
  );
}
