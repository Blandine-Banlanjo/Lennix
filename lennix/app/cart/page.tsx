"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  return (
    <main className="min-h-screen bg-[#FCF8F2] px-6 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#B8860B]">
            Your LenniX Selection
          </p>

          <h1 className="text-5xl text-[#2D2D2D]">
            Shopping Cart
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="rounded-[40px] bg-white px-8 py-20 text-center shadow-sm">
            <p className="text-xl text-[#2D2D2D]">
              Your LenniX cart is empty.
            </p>

            <p className="mx-auto mt-3 max-w-md text-gray-500">
              Discover a fragrance that becomes part
              of your signature.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-block rounded-full bg-[#D4AF37] px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-[#B8860B]"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Items */}
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="rounded-[32px] bg-white p-5 shadow-sm md:p-6"
                >
                  <div className="flex gap-5">
                    {/* Image */}
                    <Link
                      href={`/shop/${item.product.slug}`}
                      className="relative flex h-32 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#F6E8EA]"
                    >
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={120}
                        height={140}
                        className="h-28 w-auto object-contain"
                      />
                    </Link>

                    {/* Information */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div className="flex justify-between gap-4">
                        <div>
                          <Link
                            href={`/shop/${item.product.slug}`}
                          >
                            <h2 className="text-xl text-[#2D2D2D] transition hover:text-[#B8860B]">
                              {item.product.name}
                            </h2>
                          </Link>

                          <p className="mt-1 text-sm text-gray-500">
                            LenniX Perfume Oil
                          </p>
                        </div>

                        <p className="font-medium text-[#B8860B]">
                          $
                          {(
                            item.product.price *
                            item.quantity
                          ).toFixed(2)}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center rounded-full border border-[#D4AF37]/30">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="px-4 py-2 text-lg text-[#B8860B]"
                            aria-label={`Decrease ${item.product.name} quantity`}
                          >
                            −
                          </button>

                          <span className="min-w-8 text-center text-sm">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="px-4 py-2 text-lg text-[#B8860B]"
                            aria-label={`Increase ${item.product.name} quantity`}
                          >
                            +
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(
                              item.product.id
                            )
                          }
                          className="text-xs uppercase tracking-[0.12em] text-gray-400 transition hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <aside className="h-fit rounded-[32px] bg-white p-7 shadow-sm lg:sticky lg:top-28">
              <p className="uppercase tracking-[0.2em] text-[#B8860B]">
                Order Summary
              </p>

              <div className="mt-7 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span>
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Shipping
                  </span>

                  <span className="text-gray-500">
                    Calculated at checkout
                  </span>
                </div>
              </div>

              <div className="my-6 h-px bg-[#D4AF37]/20" />

              <div className="flex justify-between text-lg">
                <span>Total</span>

                <span className="font-medium text-[#B8860B]">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <Link
                href="/checkout"
                className="mt-7 block w-full rounded-full bg-[#D4AF37] py-4 text-center text-sm uppercase tracking-[0.15em] text-white transition hover:bg-[#B8860B]"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="mt-4 block text-center text-sm text-gray-500 transition hover:text-[#B8860B]"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}