import PageHeader from "../components/ui/PageHeader";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { PageState, StudentIdentity } from "./_shared";

export default function PreAdvising() {
  const { data, loading, error } = useApi(studentApi.preAdvising, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  return (
    <>
      <PageHeader title="Pre-Registration" subtitle="Advisor-based course pre-selection status." />
      <StudentIdentity student={data.student} />
      <section className="message-card danger-message">
        <h2>{data.message}</h2>
        <p>Credit Limit: {data.creditLimit} · Probation: {data.student.probation}</p>
      </section>
    </>
  );
}
