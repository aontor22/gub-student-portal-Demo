import PageHeader from "../components/ui/PageHeader";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { PageState } from "./_shared";

export default function CourseEvaluation() {
  const { data, loading, error } = useApi(studentApi.courseEvaluation, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  return (
    <>
      <PageHeader title="Course Evaluation" subtitle="Submit feedback during the active evaluation period." />
      <section className="message-card warning-message">
        <h2>{data.title}</h2>
        <p>{data.message}</p>
      </section>
    </>
  );
}
