export const portalEndpointMap = {
  studentInfo: "/api/StudentInfo",
  classRoutine: "/api/ClassRoutine",
  transportRoutes: "/api/StudentTransport/Routes",
  studentTransport: "/api/StudentTransport",
  evaluationCourseList: "/api/EvaluationNew/GetCourseList",
  preAdvisingStatus: "/api/PreAdvising/GetStudentPreAdvisingStatus",
  autoOpenAssignCourse: "/api/PreAdvising/GetAutoOpenAssignCourse",
  installmentBillingInfo: "/api/PreAdvising/GetStudentInstallmentBillingInfo",
  studentStatus: "/api/StudentStatus",
  semesterDropApplication: "/api/SemesterDropApplication",
  program: "/api/Program",
  programChangeApplication: "/api/ProgramChange/ProgramChangeApplication"
};

export const allowedExternalEndpointKeys = new Set(Object.keys(portalEndpointMap));
