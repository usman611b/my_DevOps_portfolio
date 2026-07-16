export function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}