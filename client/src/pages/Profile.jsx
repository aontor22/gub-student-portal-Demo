import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import StatusBadge from "../components/ui/StatusBadge";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function Profile() {
  const { data, loading, error } = useApi(studentApi.profile, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  return (
    <>
      <PageHeader title="Student Profile" subtitle="Verified academic identity and program details." />
      <section className="profile-card">
        <div className="profile-banner" />
        <div className="profile-main">
          <div className="avatar-xl">{data.name.slice(0, 1)}</div>
          <div>
            <h2>{data.name}</h2>
            <p>{data.program}</p>
            <StatusBadge value={data.status} />
          </div>
        </div>
        <div className="info-grid">
          {Object.entries({
            "Student ID": data.studentId,
            "Email": data.email,
            "Phone": data.phone,
            "Department": data.department,
            "Batch": data.batch,
            "Campus": data.campus,
            "Advisor": data.advisor,
            "Blood Group": data.bloodGroup,
            "Admission": data.admissionSemester,
            "Completed Credits": data.completedCredits
          }).map(([label, value]) => (
            <div key={label} className="info-item">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
