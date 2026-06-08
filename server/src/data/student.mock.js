export const demoStudent = {
  id: "23041",
  email: "demo@student.green.edu.bd",
  password: "Demo@1234",
  firstName: "Sayed",
  name: "Sayed Hasan Emon",
  studentId: "23041",
  program: "BSc in Computer Science and Engineering",
  programShort: "CSE(Regular)",
  department: "Computer Science and Engineering",
  batch: "221",
  campus: "Permanent Campus",
  advisor: "zahidul_hasan.cse(Mr. Md. Zahidul Hasan)",
  phone: "+880 1700 000000",
  bloodGroup: "B+",
  admissionSemester: "Spring 2022",
  status: "Active",
  probation: "No probation!",
  completedCredits: 159,
  cgpa: 3.57,
  dob: "2002-09-05",
  religion: "Islam",
  gender: "Male",
  fatherName: "Md. Hasan",
  fatherProfession: "Service Holder",
  motherName: "Nusrat Jahan",
  motherProfession: "Housewife",
  maritalStatus: "Single",
  nationality: "Bangladeshi",
  guardianName: "-",
  guardianPhone: "-",
  guardianAddress: "-",
  permanentAddress: "House: - Road: - Village: Dhaka",
  presentAddress: "House: - Road: - Area: Dhaka",
  evaluationPending: 0,
  admissionCancel: "Not Applicable",
  disciplinaryBlock: "Not Applicable"
};

const resultTerms = [
  [1, "Spring 2022", 9, 3.00, 3.00, 9, 3.00, 3.00],
  [2, "Summer 2022", 15, 3.08, 3.05, 15, 3.08, 3.05],
  [3, "Fall 2022", 13.5, 2.62, 2.89, 13.5, 2.62, 2.89],
  [4, "Spring 2023", 19, 2.99, 2.92, 19, 2.99, 2.92],
  [5, "Fall 2023", 18.5, 2.71, 2.87, 18.5, 2.71, 2.87],
  [6, "Spring 2024", 19, 3.18, 2.93, 19, 3.18, 2.93],
  [7, "Fall 2024", 19.5, 3.54, 3.04, 19.5, 3.54, 3.04],
  [8, "Spring 2025", 13, 2.92, 3.03, 11, 3.45, 3.07],
  [9, "Summer 2025", 6.5, 2.25, 2.99, 4.5, 3.25, 3.08],
  [10, "Fall 2025", 11, 2.84, 2.98, 9, 3.47, 3.11]
].map(([sl, trimester, probationCredit, probationGpa, probationCgpa, transcriptCredit, transcriptGpa, transcriptCgpa]) => ({
  id: sl,
  sl,
  trimester,
  probationCredit,
  probationGpa,
  probationCgpa,
  transcriptCredit,
  transcriptGpa,
  transcriptCgpa
}));

const courseRows = [
  ["221", "CSE 101-CSE(181)", "Discrete Mathematics", 3, "B+", 3.25, ""],
  ["221", "MAT 101-CSE(181)", "Differential and Integral Calculus", 3, "B", 3, ""],
  ["221", "PHY 101-CSE(181)", "Physics I", 3, "B-", 2.75, ""],
  ["222", "CSE 103-CSE(181)", "Structured Programming", 3, "B+", 3.25, ""],
  ["222", "CSE 104-CSE(181)", "Structured Programming Lab", 1.5, "A", 3.75, ""],
  ["222", "EAP 101-CSE(181)", "English for Academic Purpose I", 3, "A-", 3.5, ""],
  ["223", "CSE 105-CSE(181)", "Data Structures", 3, "C+", 2.5, ""],
  ["231", "CSE 202-CSE(181)", "Object Oriented Programming Lab", 1.5, "A+", 4, ""],
  ["231", "EEE 202-CSE(181)", "Introduction to Electrical Engineering Lab", 1, "A", 3.75, ""],
  ["232", "CSE 205-CSE(181)", "Algorithms", 3, "C+", 2.5, ""],
  ["232", "CSE 206-CSE(181)", "Algorithms Lab", 1.5, "B+", 3.25, ""],
  ["241", "CSE 309-CSE(181)", "Operating System", 3, "A", 3.75, ""],
  ["241", "CSE 310-CSE(181)", "Operating System Lab", 1.5, "A", 3.75, ""],
  ["242", "CSE 312-CSE(181)", "Computer Networking Lab", 1.5, "A", 3.75, ""],
  ["242", "CSE 323", "Computer and Cyber Security", 3, "A-", 3.5, ""],
  ["242", "CSE 303-CSE(181)", "Web Programming", 3, "A-", 3.5, ""],
  ["250", "CSE 411-CSE(201)", "Machine Learning Lab", 1.5, "A", 3.75, ""],
  ["250", "CSE 411-CSE(201)", "Machine Learning", 3, "B", 3, ""],
  ["250", "CSE 400B-CSE(201)", "Capstone Project/Thesis", 2, "F", 0, ""],
  ["251", "CSE 315-CSE(201)", "Artificial Intelligence", 3, "A-", 3.5, ""],
  ["251", "CSE 316-CSE(201)", "Artificial Intelligence Lab", 1.5, "A-", 3.5, ""],
  ["251", "GED 405-CSE(201)", "Industrial and Operational Management", 3, "B+", 3.25, ""],
  ["252", "CSE 411", "Bangladesh Studies", 2, "B", 3, ""],
  ["252", "CSE 435-CSE(201)", "Data Mining", 3, "B+", 3.25, ""],
  ["252", "CSE 436-CSE(201)", "Data Mining Lab", 1, "A-", 3.5, ""],
  ["261", "CSE 400C-CSE(201)", "Capstone Project/Thesis", 2, "", "", "Running Course"]
].map((row, idx) => ({
  id: idx + 1,
  semester: row[0],
  code: row[1],
  title: row[2],
  credit: row[3],
  grade: row[4],
  point: row[5],
  status: row[6]
}));

const billingLedger = [
  [1, "Late Payment Fee", "", "", 500, "", "", "21/02/2026", "Spring 2026", "Late fee for 2nd installment"],
  [2, "Club Activity Fees", "", "", 200, "", "", "21/02/2026", "Spring 2026", ""],
  [3, "Tuition Fees", "CSE 435-CSE(201)", 3, 8400, "", "", "15/01/2026", "Fall 2025", ""],
  [4, "Tuition Fees", "CSE 436-CSE(201)", 1, 2800, "", "", "15/01/2026", "Fall 2025", ""],
  [5, "Student Payment", "", "", "", "", 17500, "06/01/2026", "Fall 2025", ""],
  [6, "SSC & HSC Scholarship", "", "", "", -6720, "", "12/01/2026", "Fall 2025", ""],
  [7, "Tuition Fees", "CSE 315-CSE(201)", 3, 8400, "", "", "11/08/2025", "Summer 2025", ""],
  [8, "Tuition Fees", "CSE 316-CSE(201)", 1.5, 4200, "", "", "11/08/2025", "Summer 2025", ""],
  [9, "Registration Fees", "", "", 1000, "", "", "17/05/2025", "Summer 2025", ""],
  [10, "Student Payment", "", "", "", "", 24000, "21/03/2025", "Spring 2025", ""],
  [11, "Tuition Fees", "CSE 309-CSE(181)", 3, 8400, "", "", "06/01/2025", "Spring 2025", ""],
  [12, "Tuition Fees", "CSE 310-CSE(181)", 1.5, 4200, "", "", "06/01/2025", "Spring 2025", ""],
  [13, "Student Payment", "", "", "", "", 15000, "08/09/2024", "Fall 2024", ""],
  [14, "IT & Library Services Fees", "", "", 1000, "", "", "05/06/2024", "Spring 2024", ""],
  [15, "Tuition Fees", "CSE 205-CSE(181)", 3, 8400, "", "", "05/06/2024", "Spring 2024", ""],
  [16, "Student Payment", "", "", "", "", 17500, "27/02/2024", "Spring 2024", ""],
  [17, "Admission Fees", "", "", 20000, "", "", "14/02/2022", "Spring 2022", "Manually created"],
  [18, "Tuition Fees", "CSE 101-CSE(181)", 3, 8400, "", "", "27/02/2022", "Spring 2022", ""],
  [19, "Tuition Fees", "MAT 101-CSE(181)", 3, 8400, "", "", "27/02/2022", "Spring 2022", ""],
  [20, "Student Payment", "", "", "", "", 17500, "27/02/2022", "Spring 2022", ""],
].map(([sl, feeType, courseCode, credit, amount, discount, payment, date, term, remarks]) => ({
  id: sl,
  sl,
  feeType,
  courseCode,
  credit,
  amount,
  discount,
  payment,
  date,
  term,
  remarks
}));

export const mockData = {
  summary: {
    student: {
      firstName: demoStudent.firstName,
      name: demoStudent.name,
      studentId: demoStudent.studentId,
      program: demoStudent.programShort
    },
    stats: {
      cgpa: "3.57",
      completedCredits: 159,
      remainingCredits: 9,
      semester: "Spring 2026",
      outstandingBill: "18,500"
    },
    services: [
      { icon: "▣", title: "Result History", description: "View trimester GPA, CGPA and detailed grades." },
      { icon: "৳", title: "Bill History", description: "Track invoices, installments and payment ledger." },
      { icon: "✓", title: "Registration", description: "Check advising and confirmation status." },
      { icon: "➜", title: "Transport", description: "Apply for campus transport service." }
    ],
    todayClasses: [],
    notices: [
      { id: 1, title: "Midterm admit card download is available", date: "08 Jun 2026" },
      { id: 2, title: "Pre-registration is currently inactive", date: "08 Jun 2026" },
      { id: 3, title: "Transport agreement must be completed", date: "08 Jun 2026" }
    ]
  },
  results: resultTerms,
  courses: courseRows,
  classRoutine: [],
  examRoutine: [
    { id: 1, date: "2026-06-18", time: "10:00 - 12:00", course: "CSE 435: Data Mining", room: "Hall-2", seat: "A-21", status: "Midterm" },
    { id: 2, date: "2026-06-21", time: "02:00 - 04:00", course: "CSE 436: Data Mining Lab", room: "Lab-3", seat: "B-11", status: "Midterm" }
  ],
  billing: {
    summary: {
      totalFee: "502030",
      totalDiscount: "150840",
      totalBill: "351190",
      totalPaid: "340390",
      balance: "10800",
      amountToPay: "10800"
    },
    installments: [
      { id: 1, sl: 1, installment: "1st Installment", dueDate: "21/01/2026", amount: "17500.00", payable: "17500.00", paid: "17500.00" }
    ],
    ledger: billingLedger
  },
  preAdvising: {
    creditLimit: 0,
    message: "Advising is not active at the moment. Please check back later.",
    courses: []
  },
  registrationConfirmation: {
    advisor: demoStudent.advisor,
    paymentMessage: "Pay your 1st installment amount 24000 then you can confirm your registration.",
    confirmationMessage: "Your advisor will confirm your Registration then you will download your registration slip from this page and Email.",
    note: "Please complete your Transport Agreement form before confirming your final registration. Without this step, your registration cannot be finalized.",
    courses: []
  },
  transportRoutes: [
    { id: 1, route: "Uttara Route", pickup: "Airport Road", departure: "07:30 AM", bus: "Bus-12", status: "Active" },
    { id: 2, route: "Mirpur Route", pickup: "Mirpur 10", departure: "07:15 AM", bus: "Bus-05", status: "Active" },
    { id: 3, route: "Badda Route", pickup: "Badda Link Road", departure: "07:00 AM", bus: "Bus-09", status: "Active" },
    { id: 4, route: "Dhanmondi Route", pickup: "Science Lab", departure: "06:45 AM", bus: "Bus-03", status: "Active" }
  ],
  courseEvaluation: {
    title: "Evaluation is currently closed",
    message: "The course evaluation period is not open at this time. Please check back later."
  },
  courseDrop: {
    semesters: ["Spring 2026", "Fall 2025", "Summer 2025"],
    courses: []
  },
  semesterDrop: {
    semesters: ["Spring 2026", "Fall 2025", "Summer 2025"],
    applications: []
  },
  programChange: {
    programs: ["CSE(Regular)", "EEE(Regular)", "BBA(Regular)", "English(Regular)"]
  },
  teamsInfo: {
    email: "23041@student.green.ac.bd",
    password: "DemoTeams@2026",
    note: "If you face any difficulty, please contact with ICT Cell of GUB, Level 6, Administration Building."
  },
  notices: [
    { id: 1, type: "Academic", date: "08 Jun 2026", title: "Midterm examination schedule has been published", body: "Students are advised to check the exam routine page and bring their admit card." },
    { id: 2, type: "Advising", date: "09 Jun 2026", title: "Pre-registration notice", body: "Please check advising status before course confirmation." },
    { id: 3, type: "Transport", date: "10 Jun 2026", title: "Transport service update", body: "Transport agreement is required before final registration confirmation." }
  ],
  settings: {
    emailNotifications: true,
    smsAlerts: true,
    darkAnalytics: false,
    compactTables: false
  }
};
