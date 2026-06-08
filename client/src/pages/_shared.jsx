import Loading from "../components/ui/Loading";
import DataTable from "../components/ui/DataTable";

export function PageState({ loading, error }) {
  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;
  return null;
}

export function StudentIdentity({ student }) {
  if (!student) return null;
  return (
    <section className="identity-strip">
      <div><span>Name</span><strong>{student.name}</strong></div>
      <div><span>Student ID</span><strong>{student.studentId}</strong></div>
      <div><span>Program</span><strong>{student.programShort || student.program}</strong></div>
      <div><span>Batch</span><strong>{student.batch}</strong></div>
      <div><span>Probation</span><strong>{student.probation || "No probation!"}</strong></div>
    </section>
  );
}

export function PortalCard({ title, subtitle, children, actions, className = "" }) {
  return (
    <section className={`panel portal-card ${className}`}>
      {(title || actions) && (
        <div className="panel-title">
          <div>
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
          {actions && <div className="header-actions">{actions}</div>}
        </div>
      )}
      {children}
    </section>
  );
}

export function FormRow({ label, required, children }) {
  return (
    <label className="form-row">
      <span>{label}{required && <b> *</b>}</span>
      {children}
    </label>
  );
}

export function SelectBox({ children, defaultValue = "" }) {
  return <select defaultValue={defaultValue}>{children}</select>;
}

export function EmptyTable({ columns, text = "No data found" }) {
  return <DataTable columns={columns.map((label) => ({ key: label, label }))} rows={[]} emptyText={text} />;
}

export function InfoList({ items }) {
  return (
    <div className="info-list">
      {items.map((item) => (
        <div key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value || "-"}</strong>
        </div>
      ))}
    </div>
  );
}
