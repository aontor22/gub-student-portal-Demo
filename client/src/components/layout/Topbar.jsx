import { useAuth } from "../../context/AuthContext";

export default function Topbar({ onMenu }) {
  const { user, logout } = useAuth();

  return (
    <header className="topbar">
      <button className="icon-button menu-button" type="button" onClick={onMenu} aria-label="Open menu">
        ☰
      </button>
      <div className="search-box">
        <span>⌕</span>
        <input placeholder="Search courses, notices, services" />
      </div>
      <div className="topbar-actions">
        <button className="ghost-button" type="button">Help Desk</button>
        <div className="user-chip">
          <span>{user?.name?.slice(0, 1) || "S"}</span>
          <div>
            <strong>{user?.name || "Student"}</strong>
            <small>{user?.studentId}</small>
          </div>
        </div>
        <button className="danger-button" type="button" onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
