import PageHeader from "../components/ui/PageHeader";
import { FormRow, PortalCard } from "./_shared";

export default function PasswordChange() {
  return (
    <>
      <PageHeader title="Password Change" subtitle="Update your student portal password securely." />
      <PortalCard>
        <div className="form-grid narrow">
          <FormRow label="Current Password"><input type="password" /></FormRow>
          <FormRow label="New Password"><input type="password" /></FormRow>
          <FormRow label="Confirm Password"><input type="password" /></FormRow>
        </div>
        <button className="primary-button small">Submit</button>
      </PortalCard>
    </>
  );
}
