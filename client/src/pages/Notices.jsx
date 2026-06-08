import PageHeader from "../components/ui/PageHeader";
import StatusBadge from "../components/ui/StatusBadge";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { PageState } from "./_shared";

export default function Notices() {
  const { data, loading, error } = useApi(studentApi.notices, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;

  return (
    <>
      <PageHeader title="Notice Board" subtitle="Academic and administrative updates." />
      <section className="notice-grid">
        {data.notices.map((notice) => (
          <article className="notice-card" key={notice.id}>
            <div className="notice-card-top"><StatusBadge value={notice.type} /><span>{notice.date}</span></div>
            <h2>{notice.title}</h2>
            <p>{notice.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
