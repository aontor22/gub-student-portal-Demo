import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import DataTable from "../components/ui/DataTable";
import StatusBadge from "../components/ui/StatusBadge";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function ClassRoutine() {
  const { data, loading, error } = useApi(studentApi.classRoutine, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  const columns = [
    { key: "day", label: "Day" },
    { key: "time", label: "Time" },
    { key: "course", label: "Course" },
    { key: "faculty", label: "Faculty" },
    { key: "room", label: "Room" },
    { key: "type", label: "Type", render: (row) => <StatusBadge value={row.type} /> }
  ];

  return (
    <>
      <PageHeader title="Class Routine" subtitle="Weekly class schedule with room and faculty details." />
      <section className="panel"><DataTable columns={columns} rows={data.routine} /></section>
    </>
  );
}
