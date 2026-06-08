import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main className="main-panel">
        <Topbar onMenu={() => setOpen(true)} />
        <section className="content-area">{children}</section>
      </main>
    </div>
  );
}
