import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="h-28  border-t-2 w-full flex items-center justify-center bg-slate-800 text-white">
      <ul className="flex items-center justify-between gap-12">
        <Link href="">
          <FaFacebookF />
        </Link>
        <Link href="">
          <FaInstagramSquare />
        </Link>
        <Link href="">
          <FaYoutube />
        </Link>
      </ul>
    </footer>
  );
}
