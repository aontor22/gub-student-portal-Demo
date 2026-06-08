import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <nav aria-label="Student portal sections">
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
      </aside>
      {open && <button className="overlay" type="button" aria-label="Close menu" onClick={onClose} />}
    </>
  );
}
