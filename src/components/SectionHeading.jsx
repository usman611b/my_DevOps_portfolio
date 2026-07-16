export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/90">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}