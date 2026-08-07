export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#d4af3730] bg-[#fcf8f2]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <div className="text-3xl font-semibold tracking-[0.35em] text-[#b8860b]">
          LenniX
        </div>

        <nav className="hidden gap-10 text-sm uppercase tracking-[0.2em] text-[#444] lg:flex">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Gift Sets</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-full border border-[#d4af37] px-6 py-2 text-sm text-[#b8860b] transition hover:bg-[#d4af37] hover:text-white">
          Shop Now
        </button>
      </div>
    </header>
  );
}