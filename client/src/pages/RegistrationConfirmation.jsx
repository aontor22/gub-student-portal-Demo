import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { PageState, PortalCard, StudentIdentity } from "./_shared";

export default function RegistrationConfirmation() {
  const { data, loading, error } = useApi(studentApi.registrationConfirmation, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  const columns = [
    { key: "code", label: "Course Code" },
    { key: "title", label: "Course Title" },
    { key: "credit", label: "Credit" },
    { key: "section", label: "Section" },
    { key: "status", label: "Status" }
  ];
  return (
    <>
      <PageHeader title="Registration Confirmation" subtitle="Advisor message and registration slip status." />
      <StudentIdentity student={data.student} />
      <section className="message-card info-message centered-message">
        <h2>Your Advisor is : {data.advisor}</h2>
        <p>{data.paymentMessage}</p>
        <p>{data.confirmationMessage}</p>
        <strong>Note: {data.note}</strong>
      </section>
      <PortalCard title="Taken Courses for Registration" actions={<button className="primary-button small">Registration Slip Download</button>}>
        <DataTable columns={columns} rows={data.courses} emptyText="No course found" />
      </PortalCard>
    </>
  );
}
