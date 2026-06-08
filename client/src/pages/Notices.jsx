import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import StatusBadge from "../components/ui/StatusBadge";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function Notices() {
  const { data, loading, error } = useApi(studentApi.notices, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  return (
    <>
      <PageHeader title="Notice Board" subtitle="Academic and administrative updates." />
      <section className="notice-grid">
        {data.notices.map((notice) => (
          <article className="notice-card" key={notice.id}>
            <div className="notice-card-top">
              <StatusBadge value={notice.type} />
              <span>{notice.date}</span>
            </div>
            <h2>{notice.title}</h2>
            <p>{notice.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
