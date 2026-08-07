"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#d4af3730] bg-[#fcf8f2]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-semibold tracking-[0.35em] text-[#b8860b]"
        >
          LenniX
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-10 text-sm uppercase tracking-[0.2em] text-[#444] lg:flex">
          <Link
            href="/"
            className="transition-colors hover:text-[#b8860b]"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="transition-colors hover:text-[#b8860b]"
          >
            Shop
          </Link>

          <Link
            href="/shop?category=women"
            className="transition-colors hover:text-[#b8860b]"
          >
            Women
          </Link>

          <Link
            href="/shop?category=men"
            className="transition-colors hover:text-[#b8860b]"
          >
            Men
          </Link>

          <Link
            href="/shop?category=gift-set"
            className="transition-colors hover:text-[#b8860b]"
          >
            Gift Sets
          </Link>

          <Link
            href="/#about"
            className="transition-colors hover:text-[#b8860b]"
          >
            About
          </Link>

          <Link
            href="/#contact"
            className="transition-colors hover:text-[#b8860b]"
          >
            Contact
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center gap-2 transition-colors hover:text-[#b8860b]"
          >
            Cart

            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D4AF37] px-1.5 text-[10px] font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Shop button */}
        <Link
          href="/shop"
          className="rounded-full border border-[#d4af37] px-6 py-2 text-sm text-[#b8860b] transition hover:bg-[#d4af37] hover:text-white"
        >
          Shop Now
        </Link>
      </div>
    </header>
  );
}