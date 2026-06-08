export default function Loading({ label = "Loading data" }) {
  return (
    <div className="loading-card">
      <span className="spinner" />
      <span>{label}</span>
    </div>
  );
}
