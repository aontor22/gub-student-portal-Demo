import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import Loading from "../components/ui/Loading";
import MiniChart from "../components/ui/MiniChart";
import DataTable from "../components/ui/DataTable";
import StatusBadge from "../components/ui/StatusBadge";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function Dashboard() {
  const { data, loading, error } = useApi(studentApi.summary, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  const columns = [
    { key: "time", label: "Time" },
    { key: "course", label: "Course" },
    { key: "room", label: "Room" },
    { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> }
  ];

  return (
    <>
      <PageHeader
        title={`Good day, ${data.student.firstName}`}
        subtitle="Here is your academic snapshot and today’s important activity."
        actions={<button className="primary-button small">Download Summary</button>}
      />

      <div className="stats-grid">
        <StatCard label="CGPA" value={data.stats.cgpa} hint="Updated after last published result" tone="blue" />
        <StatCard label="Completed Credits" value={data.stats.completedCredits} hint={`${data.stats.remainingCredits} credits remaining`} tone="green" />
        <StatCard label="Current Semester" value={data.stats.semester} hint="Registration confirmed" tone="violet" />
        <StatCard label="Outstanding Bill" value={`৳${data.stats.outstandingBill}`} hint="Due this month" tone="amber" />
      </div>

      <div className="dashboard-grid">
        <section className="panel large-panel">
          <div className="panel-title">
            <div>
              <h2>Today’s Classes</h2>
              <p>Live view of scheduled academic activity.</p>
            </div>
          </div>
          <DataTable columns={columns} rows={data.todayClasses} />
        </section>

        <section className="panel">
          <div className="panel-title">
            <div>
              <h2>Credit Progress</h2>
              <p>Program completion overview.</p>
            </div>
          </div>
          <MiniChart items={data.creditProgress} />
        </section>
      </div>

      <div className="dashboard-grid equal">
        <section className="panel">
          <div className="panel-title"><h2>Latest Notices</h2></div>
          <div className="notice-list">
            {data.notices.map((notice) => (
              <article key={notice.id} className="notice-item">
                <strong>{notice.title}</strong>
                <span>{notice.date}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="panel accent-panel">
          <span className="pill">Pre Advising</span>
          <h2>{data.preAdvising.title}</h2>
          <p>{data.preAdvising.message}</p>
          <button className="light-button">View advising status</button>
        </section>
      </div>
    </>
  );
}
