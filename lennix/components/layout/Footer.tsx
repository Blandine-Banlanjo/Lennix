export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#D4AF37]/20 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-3xl text-[#B8860B]">
              LenniX
            </h3>

            <p className="text-gray-600">
              Luxury perfume oils designed to leave unforgettable
              impressions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Shop
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li>Women</li>
              <li>Men</li>
              <li>Gift Sets</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Support
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li>Contact</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Payments
            </h4>

            <p className="text-gray-600">
              Visa • Mastercard • PayPal • MTN MoMo • Orange Money
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} LenniX Perfumes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
