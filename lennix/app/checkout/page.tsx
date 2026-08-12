"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

type PaymentMethod =
  | "card"
  | "paypal"
  | "momo"
  | "orange";

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("card");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
  });

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#FCF8F2] px-6 pb-24 pt-32 md:px-8">
        <div className="mx-auto max-w-3xl rounded-[40px] bg-white px-8 py-20 text-center shadow-sm">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#B8860B]">
            LenniX Checkout
          </p>

          <h1 className="text-4xl text-[#2D2D2D]">
            Your cart is empty
          </h1>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Add a fragrance to your cart before
            proceeding to checkout.
          </p>

          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-[#D4AF37] px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-[#B8860B]"
          >
            Explore Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FCF8F2] px-6 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#B8860B]">
            LenniX Fragrance House
          </p>

          <h1 className="text-5xl text-[#2D2D2D]">
            Checkout
          </h1>

          <p className="mt-3 text-gray-500">
            Complete your details to place your order.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          {/* Checkout form */}
          <section className="space-y-8">
            {/* Contact */}
            <div className="rounded-[32px] bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-2xl text-[#2D2D2D]">
                Contact Information
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                We will use these details to confirm your order.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={(e) =>
                    updateField(
                      "firstName",
                      e.target.value
                    )
                  }
                  className="rounded-2xl border border-[#D4AF37]/20 bg-[#FCF8F2] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                />

                <input
                  type="text"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={(e) =>
                    updateField(
                      "lastName",
                      e.target.value
                    )
                  }
                  className="rounded-2xl border border-[#D4AF37]/20 bg-[#FCF8F2] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) =>
                    updateField(
                      "email",
                      e.target.value
                    )
                  }
                  className="rounded-2xl border border-[#D4AF37]/20 bg-[#FCF8F2] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) =>
                    updateField(
                      "phone",
                      e.target.value
                    )
                  }
                  className="rounded-2xl border border-[#D4AF37]/20 bg-[#FCF8F2] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Delivery */}
            <div className="rounded-[32px] bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-2xl text-[#2D2D2D]">
                Delivery Information
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Where should we deliver your LenniX order?
              </p>

              <div className="mt-7 space-y-5">
                <input
                  type="text"
                  placeholder="Street address"
                  value={form.address}
                  onChange={(e) =>
                    updateField(
                      "address",
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-[#D4AF37]/20 bg-[#FCF8F2] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="City"
                    value={form.city}
                    onChange={(e) =>
                      updateField(
                        "city",
                        e.target.value
                      )
                    }
                    className="rounded-2xl border border-[#D4AF37]/20 bg-[#FCF8F2] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                  />

                  <select
                    value={form.region}
                    onChange={(e) =>
                      updateField(
                        "region",
                        e.target.value
                      )
                    }
                    className="rounded-2xl border border-[#D4AF37]/20 bg-[#FCF8F2] px-5 py-4 outline-none transition focus:border-[#D4AF37]"
                  >
                    <option value="">
                      Select region
                    </option>
                    <option value="Centre">
                      Centre
                    </option>
                    <option value="Littoral">
                      Littoral
                    </option>
                    <option value="South West">
                      South West
                    </option>
                    <option value="North West">
                      North West
                    </option>
                    <option value="West">
                      West
                    </option>
                    <option value="North">
                      North
                    </option>
                    <option value="Far North">
                      Far North
                    </option>
                    <option value="Adamawa">
                      Adamawa
                    </option>
                    <option value="East">
                      East
                    </option>
                    <option value="South">
                      South
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-[32px] bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-2xl text-[#2D2D2D]">
                Payment Method
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Choose how you will like to pay.
              </p>

              <div className="mt-7 grid gap-4">
                <PaymentOption
                  value="card"
                  selected={paymentMethod === "card"}
                  onSelect={setPaymentMethod}
                  title="Visa / Mastercard"
                  description="Pay securely with your bank card."
                />

                <PaymentOption
                  value="paypal"
                  selected={paymentMethod === "paypal"}
                  onSelect={setPaymentMethod}
                  title="PayPal"
                  description="Pay using your PayPal account."
                />

                <PaymentOption
                  value="momo"
                  selected={paymentMethod === "momo"}
                  onSelect={setPaymentMethod}
                  title="MTN Mobile Money"
                  description="Pay with MTN MoMo Cameroon."
                />

                <PaymentOption
                  value="orange"
                  selected={paymentMethod === "orange"}
                  onSelect={setPaymentMethod}
                  title="Orange Money"
                  description="Pay with Orange Money Cameroon."
                />
              </div>

              {paymentMethod === "card" && (
                <div className="mt-6 rounded-2xl bg-[#FCF8F2] p-5">
                  <p className="text-sm text-gray-600">
                    Card details will be securely collected
                    through our payment provider.
                  </p>
                </div>
              )}

              {paymentMethod === "momo" && (
                <div className="mt-6 rounded-2xl bg-[#FCF8F2] p-5">
                  <p className="text-sm text-gray-600">
                    You will be redirected to the secure MTN
                    Mobile Money payment flow after placing
                    your order.
                  </p>
                </div>
              )}

              {paymentMethod === "orange" && (
                <div className="mt-6 rounded-2xl bg-[#FCF8F2] p-5">
                  <p className="text-sm text-gray-600">
                    You will be redirected to the secure Orange
                    Money payment flow after placing your
                    order.
                  </p>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="mt-6 rounded-2xl bg-[#FCF8F2] p-5">
                  <p className="text-sm text-gray-600">
                    You will continue to PayPal to authorize
                    your payment securely.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Order summary */}
          <aside className="h-fit rounded-[32px] bg-white p-7 shadow-sm lg:sticky lg:top-28">
            <p className="uppercase tracking-[0.2em] text-[#B8860B]">
              Your Order
            </p>

            <div className="mt-7 space-y-5">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between gap-4"
                >
                  <div>
                    <p className="text-[#2D2D2D]">
                      {item.product.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="shrink-0 text-[#B8860B]">
                    $
                    {(
                      item.product.price *
                      item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-7 h-px bg-[#D4AF37]/20" />

            <div className="flex justify-between text-lg">
              <span>Total</span>

              <span className="font-medium text-[#B8860B]">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-full bg-[#D4AF37] py-5 text-sm font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#B8860B]"
            >
              Place Order
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-400">
              By placing your order, you agree to our
              terms and conditions.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}

type PaymentOptionProps = {
  value: PaymentMethod;
  selected: boolean;
  onSelect: (value: PaymentMethod) => void;
  title: string;
  description: string;
};

function PaymentOption({
  value,
  selected,
  onSelect,
  title,
  description,
}: PaymentOptionProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`w-full rounded-2xl border p-5 text-left transition ${
        selected
          ? "border-[#D4AF37] bg-[#FCF8F2]"
          : "border-gray-200 bg-white hover:border-[#D4AF37]/50"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            selected
              ? "border-[#D4AF37]"
              : "border-gray-300"
          }`}
        >
          {selected && (
            <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
          )}
        </span>

        <div>
          <p className="font-medium text-[#2D2D2D]">
            {title}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}