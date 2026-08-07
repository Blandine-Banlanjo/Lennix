"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 w-full rounded-full bg-[#D4AF37] px-8 py-5 font-medium uppercase tracking-[0.15em] text-white transition hover:scale-[1.02] hover:bg-[#B8860B]"
    >
      Add to Cart
    </button>
  );
}