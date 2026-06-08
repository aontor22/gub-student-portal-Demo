import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import DataTable from "../components/ui/DataTable";
import MiniChart from "../components/ui/MiniChart";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function Results() {
  const { data, loading, error } = useApi(studentApi.results, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  const columns = [
    { key: "semester", label: "Semester" },
    { key: "credit", label: "Credit" },
    { key: "gpa", label: "GPA" },
    { key: "cgpa", label: "CGPA" },
    { key: "remarks", label: "Remarks" }
  ];

  return (
    <>
      <PageHeader title="Result History" subtitle="Semester-wise GPA and CGPA progression." />
      <div className="dashboard-grid">
        <section className="panel large-panel">
          <DataTable columns={columns} rows={data.semesters} />
        </section>
        <section className="panel">
          <div className="panel-title"><h2>GPA Trend</h2></div>
          <MiniChart items={data.semesters.map((row) => ({ label: row.semester, value: row.gpa }))} />
        </section>
      </div>
    </>
  );
}
