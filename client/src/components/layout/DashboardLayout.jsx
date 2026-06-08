import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell">
      <Topbar onMenu={() => setOpen(true)} />
      <div className="portal-body">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <main className="main-panel">
          <section className="content-area">{children}</section>
        </main>
      </div>
    </div>
  );
}
