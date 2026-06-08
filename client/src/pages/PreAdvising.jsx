import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import DataTable from "../components/ui/DataTable";
import StatusBadge from "../components/ui/StatusBadge";
import StatCard from "../components/ui/StatCard";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function PreAdvising() {
  const { data, loading, error } = useApi(studentApi.preAdvising, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  const columns = [
    { key: "code", label: "Code" },
    { key: "title", label: "Course" },
    { key: "credit", label: "Credit" },
    { key: "section", label: "Section" },
    { key: "seat", label: "Seat" },
    { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> }
  ];

  return (
    <>
      <PageHeader title="Pre Advising" subtitle="Course selection status and assigned courses." />
      <div className="stats-grid three">
        <StatCard label="Status" value={data.status} hint={data.message} />
        <StatCard label="Assigned Credits" value={data.assignedCredits} hint="Within permitted credit limit" tone="green" />
        <StatCard label="Advising Window" value={data.window} hint="Follow advisor approval" tone="violet" />
      </div>
      <section className="panel"><DataTable columns={columns} rows={data.courses} /></section>
    </>
  );
}
