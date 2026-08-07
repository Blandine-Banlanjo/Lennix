type LuxuryButtonProps = {
  children: React.ReactNode;
  variant?: "gold" | "black";
};

export default function LuxuryButton({
  children,
  variant = "gold",
}: LuxuryButtonProps) {
  const styles =
    variant === "gold"
      ? "bg-[#D4AF37] text-black hover:bg-[#c29b24]"
      : "bg-black text-white hover:bg-neutral-900";

  return (
    <button
      className={`${styles} rounded-full px-8 py-4 text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105`}
    >
      {children}
    </button>
  );
}
