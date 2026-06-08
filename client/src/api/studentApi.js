import { http } from "./http";

export const authApi = {
  login: (payload) => http.post("/auth/login", payload),
  me: () => http.get("/auth/me"),
  logout: () => http.post("/auth/logout")
};

export const studentApi = {
  summary: () => http.get("/student/summary"),
  profile: () => http.get("/student/profile"),
  courseHistory: () => http.get("/student/course-history"),
  results: () => http.get("/student/results"),
  classRoutine: () => http.get("/student/class-routine"),
  examRoutine: () => http.get("/student/exam-routine"),
  billing: () => http.get("/student/billing"),
  preAdvising: () => http.get("/student/pre-advising"),
  transportRoutes: () => http.get("/student/transport-routes"),
  notices: () => http.get("/student/notices"),
  settings: () => http.get("/student/settings"),
  updateSettings: (payload) => http.put("/student/settings", payload),
  courseEvaluation: () => http.get("/student/course-evaluation"),
  registrationConfirmation: () => http.get("/student/registration-confirmation"),
  courseDrop: () => http.get("/student/course-drop"),
  semesterDrop: () => http.get("/student/semester-drop"),
  programChange: () => http.get("/student/program-change"),
  documents: () => http.get("/student/documents"),
  teamsInfo: () => http.get("/student/teams-info")
};
