import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import DataTable from "../components/ui/DataTable";
import StatusBadge from "../components/ui/StatusBadge";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function ExamRoutine() {
  const { data, loading, error } = useApi(studentApi.examRoutine, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  const columns = [
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "course", label: "Course" },
    { key: "room", label: "Room" },
    { key: "seat", label: "Seat" },
    { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> }
  ];

  return (
    <>
      <PageHeader title="Exam Routine" subtitle="Upcoming examinations and seat plan overview." />
      <section className="panel"><DataTable columns={columns} rows={data.exams} /></section>
    </>
  );
}
