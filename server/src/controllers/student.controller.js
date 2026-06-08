import {
  getBillingForStudent,
  getClassRoutineForStudent,
  getCourseDropForStudent,
  getCourseEvaluationForStudent,
  getCourseHistoryForStudent,
  getDocumentsForStudent,
  getExamRoutineForStudent,
  getNoticesForStudent,
  getPreAdvisingForStudent,
  getProfileForStudent,
  getProgramChangeForStudent,
  getRegistrationConfirmationForStudent,
  getResultsForStudent,
  getSemesterDropForStudent,
  getSettingsForStudent,
  getSummaryForStudent,
  getTeamsInfoForStudent,
  getTransportRoutesForStudent,
  updateSettingsForStudent
} from "../services/mockStudent.service.js";

export const summary = (req, res) => res.json(getSummaryForStudent(req.user.studentId));
export const profile = (req, res) => res.json(getProfileForStudent(req.user.studentId));
export const courseHistory = (req, res) => res.json(getCourseHistoryForStudent(req.user.studentId));
export const results = (req, res) => res.json(getResultsForStudent(req.user.studentId));
export const classRoutine = (req, res) => res.json(getClassRoutineForStudent(req.user.studentId));
export const examRoutine = (req, res) => res.json(getExamRoutineForStudent(req.user.studentId));
export const billing = (req, res) => res.json(getBillingForStudent(req.user.studentId));
export const preAdvising = (req, res) => res.json(getPreAdvisingForStudent(req.user.studentId));
export const transportRoutes = (req, res) => res.json(getTransportRoutesForStudent(req.user.studentId));
export const courseEvaluation = (req, res) => res.json(getCourseEvaluationForStudent(req.user.studentId));
export const registrationConfirmation = (req, res) => res.json(getRegistrationConfirmationForStudent(req.user.studentId));
export const courseDrop = (req, res) => res.json(getCourseDropForStudent(req.user.studentId));
export const semesterDrop = (req, res) => res.json(getSemesterDropForStudent(req.user.studentId));
export const programChange = (req, res) => res.json(getProgramChangeForStudent(req.user.studentId));
export const documents = (req, res) => res.json(getDocumentsForStudent(req.user.studentId));
export const teamsInfo = (req, res) => res.json(getTeamsInfoForStudent(req.user.studentId));
export const notices = (req, res) => res.json(getNoticesForStudent(req.user.studentId));
export const settings = (req, res) => res.json(getSettingsForStudent(req.user.studentId));
export const updateSettings = (req, res) => res.json(updateSettingsForStudent(req.user.studentId, req.body));
