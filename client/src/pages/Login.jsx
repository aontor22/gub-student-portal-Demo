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
    <main className="login-page">
      <section className="login-hero">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="login-copy">
          <span className="pill">Industry grade student services</span>
          <h1>One portal for academics, advising, billing and transport.</h1>
          <p>
            A fast, responsive dashboard experience with secure authentication and API-ready backend architecture.
          </p>
          <div className="hero-grid">
            <div><strong>159</strong><span>Completed credits</span></div>
            <div><strong>3.57</strong><span>Current CGPA</span></div>
            <div><strong>12</strong><span>Active services</span></div>
          </div>
        </div>
      </section>

      <section className="login-panel">
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="brand login-brand">
            <div className="brand-mark">IP</div>
            <div>
              <strong>Iron Portal</strong>
              <span>Secure student login</span>
            </div>
          </div>

          <h2>Welcome back</h2>
          <p>Use the demo credentials or connect your own authorized backend.</p>

          <label>
            Student ID or Email
            <input value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="23041" required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          {error && <div className="form-error">{error}</div>}

          <button className="primary-button" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in to dashboard"}
          </button>

          <div className="demo-note">
            <strong>Demo:</strong> 23041 / Demo@1234
          </div>
        </form>
      </section>
    </main>
  );
}
