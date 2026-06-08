import PageHeader from "../components/ui/PageHeader";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { FormRow, PageState, PortalCard, SelectBox, StudentIdentity } from "./_shared";

export default function ProgramChange() {
  const { data, loading, error } = useApi(studentApi.programChange, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  return (
    <>
      <PageHeader title="Student Program Change" subtitle="Request program transfer with valid reason." />
      <PortalCard title="Student Academic Information"><StudentIdentity student={data.student} /></PortalCard>
      <PortalCard title="Program Change Application">
        <div className="form-grid narrow">
          <FormRow label="Current Program"><input value={data.student.programShort} readOnly /></FormRow>
          <FormRow label="New Program" required><SelectBox><option>-Select-</option>{data.programs.map((p) => <option key={p}>{p}</option>)}</SelectBox></FormRow>
          <FormRow label="Reason" required><textarea /></FormRow>
        </div>
        <div className="action-row"><button className="primary-button small green">Submit</button><button className="danger-button">Cancel</button></div>
      </PortalCard>
    </>
  );
}
