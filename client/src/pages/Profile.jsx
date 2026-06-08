import PageHeader from "../components/ui/PageHeader";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { InfoList, PageState, PortalCard, StudentIdentity } from "./_shared";

export default function Profile() {
  const { data, loading, error } = useApi(studentApi.profile, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;

  return (
    <>
      <PageHeader title="Student Profile" subtitle="Academic status, basic information and contact details." />
      <StudentIdentity student={data} />
      <PortalCard title="Status">
        <InfoList items={[
          { label: "Evaluation Pending", value: `${data.evaluationPending} Courses` },
          { label: "Active Status", value: data.status },
          { label: "Admission Cancel", value: data.admissionCancel },
          { label: "Disciplinary Block", value: data.disciplinaryBlock }
        ]} />
      </PortalCard>
      <PortalCard title="Basic Information">
        <InfoList items={[
          { label: "Email", value: data.email },
          { label: "Phone Number", value: data.phone },
          { label: "DOB", value: data.dob },
          { label: "Religion", value: data.religion },
          { label: "Blood Group", value: data.bloodGroup },
          { label: "Gender", value: data.gender },
          { label: "Father Name", value: data.fatherName },
          { label: "Mother Name", value: data.motherName },
          { label: "Marital Status", value: data.maritalStatus },
          { label: "Nationality", value: data.nationality },
          { label: "Permanent Address", value: data.permanentAddress },
          { label: "Present Address", value: data.presentAddress }
        ]} />
      </PortalCard>
    </>
  );
}
