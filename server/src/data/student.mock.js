export const demoStudent = {
  id: "23041",
  email: "demo@student.green.edu.bd",
  password: "Demo@1234",
  firstName: "Sayed",
  name: "Sayed Hasan Emon",
  studentId: "23041",
  program: "BSc in Computer Science and Engineering",
  department: "Computer Science and Engineering",
  batch: "Spring 2022",
  campus: "Permanent Campus",
  advisor: "Dr. N. Rahman",
  phone: "+880 1700 000000",
  bloodGroup: "B+",
  admissionSemester: "Spring 2022",
  status: "Active",
  completedCredits: 159,
  cgpa: 3.57
};

export const mockData = {
  summary: {
    student: {
      firstName: demoStudent.firstName,
      name: demoStudent.name,
      studentId: demoStudent.studentId,
      program: demoStudent.program
    },
    stats: {
      cgpa: "3.57",
      completedCredits: 159,
      remainingCredits: 9,
      semester: "Spring 2026",
      outstandingBill: "18,500"
    },
    todayClasses: [
      { id: 1, time: "09:00 - 10:30", course: "CSE 421: Software Architecture", room: "C-502", status: "Active" },
      { id: 2, time: "11:00 - 12:30", course: "CSE 415: Data Mining", room: "Lab-4", status: "Lab" },
      { id: 3, time: "02:00 - 03:30", course: "CSE 430: Cloud Computing", room: "B-407", status: "Theory" }
    ],
    creditProgress: [
      { label: "Completed", value: 159 },
      { label: "Current", value: 9 },
      { label: "Remaining", value: 9 }
    ],
    notices: [
      { id: 1, title: "Midterm schedule published", date: "08 Jun 2026" },
      { id: 2, title: "Advising confirmation deadline", date: "12 Jun 2026" },
      { id: 3, title: "Transport route update", date: "15 Jun 2026" }
    ],
    preAdvising: {
      title: "Pre-advising is open",
      message: "Review your assigned courses and confirm after advisor approval."
    }
  },
  courses: [
    { id: 1, semester: "Spring 2026", code: "CSE421", title: "Software Architecture", credit: 3, grade: "Running", status: "Active" },
    { id: 2, semester: "Spring 2026", code: "CSE415", title: "Data Mining", credit: 3, grade: "Running", status: "Active" },
    { id: 3, semester: "Fall 2025", code: "CSE405", title: "Artificial Intelligence", credit: 3, grade: "A", status: "Completed" },
    { id: 4, semester: "Fall 2025", code: "CSE407", title: "Computer Networks", credit: 3, grade: "A-", status: "Completed" },
    { id: 5, semester: "Summer 2025", code: "CSE399", title: "Project Management", credit: 3, grade: "A", status: "Completed" },
    { id: 6, semester: "Spring 2025", code: "CSE341", title: "Database Systems", credit: 3, grade: "A-", status: "Completed" },
    { id: 7, semester: "Spring 2025", code: "CSE333", title: "Operating Systems", credit: 3, grade: "B+", status: "Completed" }
  ],
  results: [
    { id: 1, semester: "Spring 2024", credit: 15, gpa: 3.42, cgpa: 3.38, remarks: "Good Standing" },
    { id: 2, semester: "Summer 2024", credit: 12, gpa: 3.55, cgpa: 3.44, remarks: "Good Standing" },
    { id: 3, semester: "Fall 2024", credit: 15, gpa: 3.61, cgpa: 3.49, remarks: "Good Standing" },
    { id: 4, semester: "Spring 2025", credit: 15, gpa: 3.67, cgpa: 3.53, remarks: "Good Standing" },
    { id: 5, semester: "Fall 2025", credit: 12, gpa: 3.76, cgpa: 3.57, remarks: "Dean List" }
  ],
  classRoutine: [
    { id: 1, day: "Sunday", time: "09:00 - 10:30", course: "CSE421 Software Architecture", faculty: "Dr. N. Rahman", room: "C-502", type: "Theory" },
    { id: 2, day: "Sunday", time: "11:00 - 12:30", course: "CSE415 Data Mining", faculty: "M. Karim", room: "Lab-4", type: "Lab" },
    { id: 3, day: "Tuesday", time: "10:00 - 11:30", course: "CSE430 Cloud Computing", faculty: "S. Ahmed", room: "B-407", type: "Theory" },
    { id: 4, day: "Wednesday", time: "02:00 - 03:30", course: "CSE421 Software Architecture", faculty: "Dr. N. Rahman", room: "C-502", type: "Theory" },
    { id: 5, day: "Thursday", time: "12:00 - 01:30", course: "CSE415 Data Mining", faculty: "M. Karim", room: "Lab-4", type: "Lab" }
  ],
  examRoutine: [
    { id: 1, date: "2026-06-18", time: "10:00 - 12:00", course: "CSE421 Software Architecture", room: "Hall-2", seat: "A-21", status: "Midterm" },
    { id: 2, date: "2026-06-21", time: "02:00 - 04:00", course: "CSE415 Data Mining", room: "Hall-3", seat: "B-11", status: "Midterm" },
    { id: 3, date: "2026-07-30", time: "10:00 - 01:00", course: "CSE430 Cloud Computing", room: "Hall-1", seat: "C-09", status: "Final" }
  ],
  billing: {
    summary: { total: "84,500", paid: "66,000", due: "18,500" },
    installments: [
      { id: 1, title: "Tuition Fee", semester: "Spring 2026", amount: "54,000", dueDate: "2026-06-15", status: "Paid" },
      { id: 2, title: "Lab Fee", semester: "Spring 2026", amount: "12,000", dueDate: "2026-06-20", status: "Paid" },
      { id: 3, title: "Final Installment", semester: "Spring 2026", amount: "18,500", dueDate: "2026-07-10", status: "Due" }
    ]
  },
  preAdvising: {
    status: "Open",
    message: "Advisor approval required before final confirmation.",
    assignedCredits: 9,
    window: "08 Jun - 15 Jun",
    courses: [
      { id: 1, code: "CSE421", title: "Software Architecture", credit: 3, section: "A", seat: "32/40", status: "Approved" },
      { id: 2, code: "CSE415", title: "Data Mining", credit: 3, section: "B", seat: "28/35", status: "Pending" },
      { id: 3, code: "CSE430", title: "Cloud Computing", credit: 3, section: "A", seat: "30/40", status: "Approved" }
    ]
  },
  transportRoutes: [
    { id: 1, route: "Uttara Route", pickup: "Airport Road", departure: "07:30 AM", bus: "Bus-12", status: "Active" },
    { id: 2, route: "Mirpur Route", pickup: "Mirpur 10", departure: "07:15 AM", bus: "Bus-05", status: "Active" },
    { id: 3, route: "Badda Route", pickup: "Badda Link Road", departure: "07:00 AM", bus: "Bus-09", status: "Active" },
    { id: 4, route: "Dhanmondi Route", pickup: "Science Lab", departure: "06:45 AM", bus: "Bus-03", status: "Pending" }
  ],
  notices: [
    { id: 1, type: "Academic", date: "08 Jun 2026", title: "Midterm examination schedule has been published", body: "Students are advised to check the exam routine page and bring their admit card." },
    { id: 2, type: "Advising", date: "09 Jun 2026", title: "Pre-advising confirmation deadline", body: "Please confirm selected courses after advisor approval within the announced deadline." },
    { id: 3, type: "Transport", date: "10 Jun 2026", title: "Transport route timing update", body: "Morning transport timing has been adjusted for selected routes due to road conditions." },
    { id: 4, type: "Billing", date: "11 Jun 2026", title: "Final installment payment reminder", body: "Students with pending payment should clear dues before the deadline to avoid service limitations." }
  ],
  settings: {
    emailNotifications: true,
    smsAlerts: true,
    darkAnalytics: false,
    compactTables: false
  }
};
