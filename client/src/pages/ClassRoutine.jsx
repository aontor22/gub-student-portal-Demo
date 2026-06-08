import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { PageState, PortalCard, StudentIdentity } from "./_shared";

export default function ClassRoutine() {
  const { data, loading, error } = useApi(studentApi.classRoutine, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  const columns = [
    { key: "formalCode", label: "Formal Code" },
    { key: "courseTitle", label: "Course Title" },
    { key: "section", label: "Section" },
    { key: "day", label: "Day" },
    { key: "room", label: "Room" },
    { key: "timeSlot", label: "Time Slot" }
  ];
  return (
    <>
      <PageHeader title="Student Class Routine" subtitle="Current semester class schedule." />
      <StudentIdentity student={data.student} />
      <PortalCard title="Class Routine"><DataTable columns={columns} rows={data.routine} emptyText="No class routine found" /></PortalCard>
    </>
  );
}
