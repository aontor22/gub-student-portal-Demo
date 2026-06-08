import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import * as studentController from "../controllers/student.controller.js";

const router = Router();

router.use(requireAuth);

router.get("/summary", asyncHandler(studentController.summary));
router.get("/profile", asyncHandler(studentController.profile));
router.get("/course-history", asyncHandler(studentController.courseHistory));
router.get("/results", asyncHandler(studentController.results));
router.get("/class-routine", asyncHandler(studentController.classRoutine));
router.get("/exam-routine", asyncHandler(studentController.examRoutine));
router.get("/billing", asyncHandler(studentController.billing));
router.get("/pre-advising", asyncHandler(studentController.preAdvising));
router.get("/transport-routes", asyncHandler(studentController.transportRoutes));
router.get("/notices", asyncHandler(studentController.notices));
router.get("/settings", asyncHandler(studentController.settings));
router.put("/settings", asyncHandler(studentController.updateSettings));

export default router;
