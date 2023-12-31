import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { CartContextProvider } from "./components/CartContext";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping Cart",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartContextProvider>
          <main className="flex flex-col justify-between items-center min-h-screen">
            <Navbar />
            <section className="w-full sm:max-w-6xl">{children}</section>
            <Footer />
          </main>
        </CartContextProvider>
      </body>
    </html>
  );
}
