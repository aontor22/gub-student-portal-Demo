import PageHeader from "../components/ui/PageHeader";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { FormRow, PageState, PortalCard, SelectBox, StudentIdentity } from "./_shared";

export default function SpecialExam() {
  const { data, loading, error } = useApi(studentApi.documents, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  return (
    <>
      <PageHeader title="Student Special Exam Application" subtitle="Load courses for overlap, improvement or special exam request." />
      <StudentIdentity student={data.student} />
      <PortalCard>
        <div className="inline-form">
          <FormRow label="Select Exam Type"><SelectBox><option>Mid Term Overlap / Improvement / Makeup</option><option>Final Term Overlap / Improvement / Makeup</option></SelectBox></FormRow>
          <button className="primary-button small">Load Course</button>
        </div>
      </PortalCard>
      <PortalCard><div className="empty-state">No course loaded yet</div></PortalCard>
    </>
  );
}
