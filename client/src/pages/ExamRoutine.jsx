import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { FormRow, PageState, PortalCard, SelectBox, StudentIdentity } from "./_shared";

export default function ExamRoutine() {
  const { data, loading, error } = useApi(studentApi.examRoutine, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  const columns = [
    { key: "date", label: "Date" },
    { key: "time", label: "Time" },
    { key: "course", label: "Course" },
    { key: "room", label: "Room" },
    { key: "seat", label: "Seat" }
  ];
  return (
    <>
      <PageHeader title="Student Exam Routine" subtitle="Select exam type to view or download routine." />
      <StudentIdentity student={data.student} />
      <PortalCard>
        <div className="inline-form">
          <FormRow label="Select Exam Type"><SelectBox defaultValue="Mid Term"><option>Mid Term</option><option>Final Term</option></SelectBox></FormRow>
          <button className="primary-button small">Download Exam Routine</button>
        </div>
      </PortalCard>
      <PortalCard title="Routine Preview"><DataTable columns={columns} rows={data.exams} emptyText="No exam routine found" /></PortalCard>
    </>
  );
}
