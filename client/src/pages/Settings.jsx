import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Loading from "../components/ui/Loading";
import { studentApi } from "../api/studentApi";
import { useApi } from "../hooks/useApi";

export default function Settings() {
  const { data, loading, error, setData } = useApi(studentApi.settings, []);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  if (loading) return <Loading />;
  if (error) return <div className="error-box">{error}</div>;

  async function updateField(key, value) {
    const next = { ...data.settings, [key]: value };
    setData({ settings: next });
    setSaving(true);
    setMessage("");
    try {
      const response = await studentApi.updateSettings(next);
      setData(response.data);
      setMessage("Settings updated");
    } catch (err) {
      setMessage(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <PageHeader title="Settings" subtitle="Notification and portal preferences." />
      <section className="panel settings-panel">
        {["emailNotifications", "smsAlerts", "darkAnalytics", "compactTables"].map((key) => (
          <label className="toggle-row" key={key}>
            <div>
              <strong>{key.replace(/([A-Z])/g, " $1")}</strong>
              <span>Enable or disable this preference for your account.</span>
            </div>
            <input
              type="checkbox"
              checked={Boolean(data.settings[key])}
              onChange={(e) => updateField(key, e.target.checked)}
            />
          </label>
        ))}
        <div className="save-state">{saving ? "Saving..." : message}</div>
      </section>
    </>
  );
}
