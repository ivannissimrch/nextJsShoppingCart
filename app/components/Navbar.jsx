import Link from "next/link";
import Cart from "./Cart";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Cart />
        </ul>
      </nav>
    </header>
  );
}
