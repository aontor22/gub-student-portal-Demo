import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import StatCard from "../components/ui/StatCard";
import StatusBadge from "../components/ui/StatusBadge";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { PageState, PortalCard } from "./_shared";

export default function Dashboard() {
  const { data, loading, error } = useApi(studentApi.summary, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;

  const columns = [
    { key: "time", label: "Time" },
    { key: "course", label: "Course" },
    { key: "room", label: "Room" },
    { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> }
  ];

  return (
    <>
      <PageHeader
        title={`Welcome to GUB Student Portal`}
        subtitle={`Good day, ${data.student.firstName}. Here is your academic overview.`}
        actions={<button className="primary-button small">Download Summary</button>}
      />
      <div className="stats-grid">
        <StatCard label="CGPA" value={data.stats.cgpa} hint="Latest published result" tone="green" />
        <StatCard label="Completed Credits" value={data.stats.completedCredits} hint={`${data.stats.remainingCredits} credits remaining`} tone="blue" />
        <StatCard label="Current Semester" value={data.stats.semester} hint="Registration status active" tone="violet" />
        <StatCard label="Outstanding Bill" value={`৳${data.stats.outstandingBill}`} hint="Due amount" tone="amber" />
      </div>
      <div className="service-grid">
        {data.services.map((item) => (
          <article className="service-card" key={item.title}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="dashboard-grid">
        <PortalCard title="Today’s Classes" subtitle="Live view of scheduled academic activity.">
          <DataTable columns={columns} rows={data.todayClasses} emptyText="No class scheduled for today" />
        </PortalCard>
        <PortalCard title="Latest Notices" subtitle="Recent academic updates.">
          <div className="notice-list compact">
            {data.notices.map((notice) => (
              <article key={notice.id} className="notice-item">
                <div><strong>{notice.title}</strong><span>{notice.date}</span></div>
              </article>
            ))}
          </div>
        </PortalCard>
      </div>
    </>
  );
}
