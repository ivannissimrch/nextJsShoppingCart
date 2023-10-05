import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
        </ul>
      </nav>
    </header>
  );
}
