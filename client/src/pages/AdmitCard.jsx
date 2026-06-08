import PageHeader from "../components/ui/PageHeader";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { FormRow, PageState, PortalCard, SelectBox, StudentIdentity } from "./_shared";

export default function AdmitCard() {
  const { data, loading, error } = useApi(studentApi.documents, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  return (
    <>
      <PageHeader title="Student Admit Card" subtitle="Select exam type and download admit card." />
      <StudentIdentity student={data.student} />
      <PortalCard>
        <div className="inline-form">
          <FormRow label="Select Exam Type"><SelectBox defaultValue="Mid Term"><option>Mid Term</option><option>Final Term</option></SelectBox></FormRow>
          <button className="primary-button small">Download Admit Card</button>
        </div>
      </PortalCard>
    </>
  );
}
