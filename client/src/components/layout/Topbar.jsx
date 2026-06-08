import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Topbar({ onMenu }) {
  const { user, logout } = useAuth();

  return (
    <header className="portal-topbar">
      <button className="menu-button" type="button" onClick={onMenu} aria-label="Open menu">☰</button>
      <Link to="/" className="gub-brand" aria-label="Portal home">
        <span className="gub-leaf">GUB</span>
        <span className="gub-title"><strong>Green</strong> <em>University of Bangladesh</em></span>
      </Link>
      <div className="topbar-user">
        <div className="avatar-head" aria-hidden="true">{user?.name?.slice(0, 1) || "S"}</div>
        <div>
          <span>{user?.studentId || "23041"} | {user?.name || "Demo Student"}</span>
          <button type="button" onClick={logout}>Logout</button>
        </div>
      </div>
    </header>
  );
}
