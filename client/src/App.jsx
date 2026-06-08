import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Loading from "./components/ui/Loading";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CourseHistory from "./pages/CourseHistory";
import Results from "./pages/Results";
import ClassRoutine from "./pages/ClassRoutine";
import ExamRoutine from "./pages/ExamRoutine";
import Billing from "./pages/Billing";
import PreAdvising from "./pages/PreAdvising";
import Transport from "./pages/Transport";
import Notices from "./pages/Notices";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function ProtectedRoute({ children }) {
  const { isAuthenticated, booting } = useAuth();
  const location = useLocation();

  if (booting) return <div className="full-screen"><Loading label="Preparing your portal" /></div>;
  if (!isAuthenticated) return <Navigate to="/login" replace state={{ from: location }} />;
  return <DashboardLayout>{children}</DashboardLayout>;
}

function GuestRoute({ children }) {
  const { isAuthenticated, booting } = useAuth();
  if (booting) return <div className="full-screen"><Loading label="Checking session" /></div>;
  if (isAuthenticated) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/course-history" element={<ProtectedRoute><CourseHistory /></ProtectedRoute>} />
      <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
      <Route path="/class-routine" element={<ProtectedRoute><ClassRoutine /></ProtectedRoute>} />
      <Route path="/exam-routine" element={<ProtectedRoute><ExamRoutine /></ProtectedRoute>} />
      <Route path="/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
      <Route path="/pre-advising" element={<ProtectedRoute><PreAdvising /></ProtectedRoute>} />
      <Route path="/transport" element={<ProtectedRoute><Transport /></ProtectedRoute>} />
      <Route path="/notices" element={<ProtectedRoute><Notices /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="*" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
    </Routes>
  );
}
