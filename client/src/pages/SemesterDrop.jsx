import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { FormRow, PageState, PortalCard, SelectBox, StudentIdentity } from "./_shared";

export default function SemesterDrop() {
  const { data, loading, error } = useApi(studentApi.semesterDrop, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  const columns = [
    { key: "sl", label: "SL" },
    { key: "type", label: "Type" },
    { key: "remarks", label: "Remarks" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status" }
  ];
  return (
    <>
      <PageHeader title="Student Semester Drop" subtitle="Apply for semester drop with required attachment and reason." />
      <StudentIdentity student={data.student} />
      <PortalCard title="Semester Drop">
        <FormRow label="Semester"><SelectBox><option>Select Semester</option>{data.semesters.map((s) => <option key={s}>{s}</option>)}</SelectBox></FormRow>
        <FormRow label="Attachment"><input type="file" multiple /><small>File Types: pdf, docx, doc, jpeg, jpg, png · Max Size: 10 Mb</small></FormRow>
        <FormRow label="Semester Drop Reason" required><textarea placeholder="Enter Reason.." /></FormRow>
        <button className="primary-button small green">Submit Application</button>
      </PortalCard>
      <PortalCard title="Application Status"><DataTable columns={columns} rows={data.applications} emptyText="No application found" /></PortalCard>
    </>
  );
}
