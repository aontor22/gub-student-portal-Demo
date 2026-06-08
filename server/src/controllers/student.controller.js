import {
  getBillingForStudent,
  getClassRoutineForStudent,
  getCourseHistoryForStudent,
  getExamRoutineForStudent,
  getNoticesForStudent,
  getPreAdvisingForStudent,
  getProfileForStudent,
  getResultsForStudent,
  getSettingsForStudent,
  getSummaryForStudent,
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
export const notices = (req, res) => res.json(getNoticesForStudent(req.user.studentId));
export const settings = (req, res) => res.json(getSettingsForStudent(req.user.studentId));
export const updateSettings = (req, res) => res.json(updateSettingsForStudent(req.user.studentId, req.body));
