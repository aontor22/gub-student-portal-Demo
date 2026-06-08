import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [studentId, setStudentId] = useState("23041");
  const [password, setPassword] = useState("Demo@1234");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login({ studentId, password });
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-shell">
      <section className="login-masthead">
        <div className="gub-logo-large">GUB</div>
        <h1><span>Green</span> University of Bangladesh</h1>
        <p>Modern academic services portal for students, advising, billing, results and campus support.</p>
      </section>

      <form className="edu-login-card" onSubmit={handleSubmit}>
        <h2>Student Login</h2>
        <p className="muted">Use the demo credentials to preview the portal.</p>
        <label>
          Student ID or Email
          <input value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="23041" required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <div className="fake-captcha">
          <span className="captcha-box" />
          <strong>I&apos;m not a robot</strong>
          <small>Demo security check</small>
        </div>
        {error && <div className="form-error">{error}</div>}
        <button className="primary-button green" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "LOG IN"}
        </button>
        <div className="demo-note"><strong>Demo:</strong> 23041 / Demo@1234</div>
      </form>
      <footer className="login-footer">© 2026 - Edusoft Consultants Ltd.</footer>
    </main>
  );
}
