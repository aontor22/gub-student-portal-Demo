import PageHeader from "../components/ui/PageHeader";
import DataTable from "../components/ui/DataTable";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";
import { FormRow, PageState, PortalCard, SelectBox, StudentIdentity } from "./_shared";

export default function Transport() {
  const { data, loading, error } = useApi(studentApi.transportRoutes, []);
  const state = <PageState loading={loading} error={error} />;
  if (loading || error) return state;
  const columns = [
    { key: "route", label: "Route" },
    { key: "pickup", label: "Pickup Point" },
    { key: "departure", label: "Departure" },
    { key: "bus", label: "Bus" },
    { key: "status", label: "Status" }
  ];
  return (
    <>
      <PageHeader title="Student Transport Request" subtitle="Apply for campus transport and review available routes." />
      <StudentIdentity student={data.student} />
      <PortalCard title="Transport Service Request Form">
        <div className="form-grid">
          <FormRow label="Student ID"><input value={data.student.studentId} readOnly /></FormRow>
          <FormRow label="Student Name"><input value={data.student.name} readOnly /></FormRow>
          <FormRow label="Select Route"><SelectBox><option>-- Select a Route --</option>{data.routes.map((route) => <option key={route.id}>{route.route}</option>)}</SelectBox></FormRow>
          <FormRow label="Pickup Point"><input placeholder="Enter your pickup point" /></FormRow>
        </div>
        <div className="radio-line"><strong>Will you avail transport for the upcoming semester?</strong><label><input type="radio" name="avail" /> Yes</label><label><input type="radio" name="avail" /> No</label></div>
        <button className="primary-button small green">Submit</button>
      </PortalCard>
      <PortalCard title="Available Routes"><DataTable columns={columns} rows={data.routes} /></PortalCard>
    </>
  );
}
