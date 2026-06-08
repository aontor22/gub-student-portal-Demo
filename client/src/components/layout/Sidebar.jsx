import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">IP</div>
          <div>
            <strong>Iron Portal</strong>
            <span>Student cockpit</span>
          </div>
        </div>

        <nav>
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={onClose}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-card">
          <p>Current Semester</p>
          <strong>Spring 2026</strong>
          <span>Academic services active</span>
        </div>
      </aside>
      {open && <button className="overlay" type="button" aria-label="Close menu" onClick={onClose} />}
    </>
  );
}
