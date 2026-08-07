type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-4 tracking-[0.4em] uppercase text-[#D4AF37]">
          {eyebrow}
        </p>
      )}

      <h2 className="mb-6 text-5xl font-light">{title}</h2>

      {subtitle && (
        <p className="text-neutral-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
