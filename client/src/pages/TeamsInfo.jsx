import PageHeader from "../components/ui/PageHeader";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { PageState, PortalCard } from "./_shared";

export default function TeamsInfo() {
  const { data, loading, error } = useApi(studentApi.teamsInfo, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  return (
    <>
      <PageHeader title="Teams Information" subtitle="Microsoft Teams credentials for academic communication." />
      <PortalCard className="teams-card">
        <ul>
          <li><strong>Email :</strong> {data.email}</li>
          <li><strong>Password :</strong> {data.password}</li>
        </ul>
        <p><strong>Note :</strong> {data.note}</p>
      </PortalCard>
    </>
  );
}
