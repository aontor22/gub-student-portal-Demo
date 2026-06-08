import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import DataTable from "../components/ui/DataTable";
import StatusBadge from "../components/ui/StatusBadge";
import StatCard from "../components/ui/StatCard";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function Billing() {
  const { data, loading, error } = useApi(studentApi.billing, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  const columns = [
    { key: "title", label: "Title" },
    { key: "semester", label: "Semester" },
    { key: "amount", label: "Amount", render: (row) => `৳${row.amount}` },
    { key: "dueDate", label: "Due Date" },
    { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> }
  ];

  return (
    <>
      <PageHeader title="Billing & Payments" subtitle="Installments, fees and payment status." />
      <div className="stats-grid three">
        <StatCard label="Total Fees" value={`৳${data.summary.total}`} hint="Current semester" />
        <StatCard label="Paid" value={`৳${data.summary.paid}`} hint="Posted to ledger" tone="green" />
        <StatCard label="Due" value={`৳${data.summary.due}`} hint="Pay before deadline" tone="amber" />
      </div>
      <section className="panel"><DataTable columns={columns} rows={data.installments} /></section>
    </>
  );
}
