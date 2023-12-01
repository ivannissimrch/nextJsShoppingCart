import Link from "next/link";
import Cart from "./Cart";

export default function Navbar() {
  return (
    <header className="h-28 border-b-2 w-full flex items-center justify-center">
      <ul className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">
          <Cart />
        </Link>
      </ul>
    </header>
  );
}
