import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import DataTable from "../components/ui/DataTable";
import StatusBadge from "../components/ui/StatusBadge";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function Transport() {
  const { data, loading, error } = useApi(studentApi.transportRoutes, []);

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  const columns = [
    { key: "route", label: "Route" },
    { key: "pickup", label: "Pickup Point" },
    { key: "departure", label: "Departure" },
    { key: "bus", label: "Bus" },
    { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> }
  ];

  return (
    <>
      <PageHeader title="Transport Routes" subtitle="Route, pickup point and campus transport timing." />
      <section className="panel"><DataTable columns={columns} rows={data.routes} /></section>
    </>
  );
}
