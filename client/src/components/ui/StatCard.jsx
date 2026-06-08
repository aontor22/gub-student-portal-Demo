export default function StatCard({ label, value, hint, tone = "blue" }) {
  return (
    <article className={`stat-card stat-${tone}`}>
      <div className="stat-glow" />
      <span>{label}</span>
      <strong>{value}</strong>
      {hint && <p>{hint}</p>}
    </article>
  );
}
