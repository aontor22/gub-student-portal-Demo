import { demoStudent, mockData } from "../data/student.mock.js";

let settings = { ...mockData.settings };

function safeStudent() {
  const { password, ...safe } = demoStudent;
  return safe;
}

function withStudent(payload) {
  return { student: safeStudent(), ...payload };
}

export function getDemoUserPublic() {
  return {
    id: demoStudent.id,
    name: demoStudent.name,
    firstName: demoStudent.firstName,
    studentId: demoStudent.studentId,
    email: demoStudent.email,
    program: demoStudent.program,
    department: demoStudent.department
  };
}

export function validateDemoLogin(studentIdOrEmail, password) {
  const normalized = String(studentIdOrEmail || "").trim().toLowerCase();
  const matchesIdentity = normalized === demoStudent.studentId.toLowerCase() || normalized === demoStudent.email.toLowerCase();
  const matchesPassword = password === demoStudent.password;
  return matchesIdentity && matchesPassword ? getDemoUserPublic() : null;
}

export function getSummaryForStudent(studentId) { assertOwnStudent(studentId); return mockData.summary; }
export function getProfileForStudent(studentId) { assertOwnStudent(studentId); return safeStudent(); }
export function getCourseHistoryForStudent(studentId) { assertOwnStudent(studentId); return { courses: mockData.courses }; }
export function getResultsForStudent(studentId) { assertOwnStudent(studentId); return { semesters: mockData.results, courses: mockData.courses }; }
export function getClassRoutineForStudent(studentId) { assertOwnStudent(studentId); return withStudent({ routine: mockData.classRoutine }); }
export function getExamRoutineForStudent(studentId) { assertOwnStudent(studentId); return withStudent({ exams: mockData.examRoutine }); }
export function getBillingForStudent(studentId) { assertOwnStudent(studentId); return mockData.billing; }
export function getPreAdvisingForStudent(studentId) { assertOwnStudent(studentId); return withStudent(mockData.preAdvising); }
export function getTransportRoutesForStudent(studentId) { assertOwnStudent(studentId); return withStudent({ routes: mockData.transportRoutes }); }
export function getCourseEvaluationForStudent(studentId) { assertOwnStudent(studentId); return mockData.courseEvaluation; }
export function getRegistrationConfirmationForStudent(studentId) { assertOwnStudent(studentId); return withStudent(mockData.registrationConfirmation); }
export function getCourseDropForStudent(studentId) { assertOwnStudent(studentId); return withStudent(mockData.courseDrop); }
export function getSemesterDropForStudent(studentId) { assertOwnStudent(studentId); return withStudent(mockData.semesterDrop); }
export function getProgramChangeForStudent(studentId) { assertOwnStudent(studentId); return withStudent(mockData.programChange); }
export function getDocumentsForStudent(studentId) { assertOwnStudent(studentId); return withStudent({}); }
export function getTeamsInfoForStudent(studentId) { assertOwnStudent(studentId); return mockData.teamsInfo; }
export function getNoticesForStudent(studentId) { assertOwnStudent(studentId); return { notices: mockData.notices }; }
export function getSettingsForStudent(studentId) { assertOwnStudent(studentId); return { settings }; }

export function updateSettingsForStudent(studentId, payload) {
  assertOwnStudent(studentId);
  settings = {
    emailNotifications: Boolean(payload.emailNotifications),
    smsAlerts: Boolean(payload.smsAlerts),
    darkAnalytics: Boolean(payload.darkAnalytics),
    compactTables: Boolean(payload.compactTables)
  };
  return { settings };
}

function assertOwnStudent(studentId) {
  if (studentId !== demoStudent.studentId) {
    const error = new Error("You can only access your own student data");
    error.statusCode = 403;
    throw error;
  }
}
