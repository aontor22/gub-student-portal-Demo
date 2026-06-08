export default function MiniChart({ items = [] }) {
  const max = Math.max(...items.map((item) => Number(item.value) || 0), 1);
  return (
    <div className="mini-chart">
      {items.map((item) => (
        <div className="chart-row" key={item.label}>
          <span>{item.label}</span>
          <div className="chart-track">
            <div className="chart-fill" style={{ width: `${(item.value / max) * 100}%` }} />
          </div>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}
