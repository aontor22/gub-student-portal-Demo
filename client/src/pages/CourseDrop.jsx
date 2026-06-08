import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { FormRow, PageState, PortalCard, SelectBox, StudentIdentity } from "./_shared";

export default function CourseDrop() {
  const { data, loading, error } = useApi(studentApi.courseDrop, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  const columns = [
    { key: "sl", label: "SL" },
    { key: "courseCode", label: "Course Code" },
    { key: "courseName", label: "Course Name" },
    { key: "request", label: "Request" },
    { key: "remarks", label: "Remarks" },
    { key: "status", label: "Request Status" }
  ];
  return (
    <>
      <PageHeader title="Student Course Drop" subtitle="Request eligible course drop for a selected semester." />
      <StudentIdentity student={data.student} />
      <PortalCard title="Course Drop">
        <FormRow label="Semester"><SelectBox><option>Select Semester</option>{data.semesters.map((s) => <option key={s}>{s}</option>)}</SelectBox></FormRow>
        <h3>Course List</h3>
        <DataTable columns={columns} rows={data.courses} emptyText="No course found" />
      </PortalCard>
    </>
  );
}
