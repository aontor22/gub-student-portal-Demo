import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import DataTable from "../components/ui/DataTable";
import StatusBadge from "../components/ui/StatusBadge";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function CourseHistory() {
  const { data, loading, error } = useApi(studentApi.courseHistory, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  const columns = [
    { key: "semester", label: "Semester" },
    { key: "code", label: "Code" },
    { key: "title", label: "Course Title" },
    { key: "credit", label: "Credit" },
    { key: "grade", label: "Grade" },
    { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> }
  ];

  return (
    <>
      <PageHeader title="Course History" subtitle="All completed and enrolled courses in one clean table." />
      <section className="panel">
        <DataTable columns={columns} rows={data.courses} />
      </section>
    </>
  );
}
