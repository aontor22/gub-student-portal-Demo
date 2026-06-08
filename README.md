# Iron Student Portal

A complete industry-style student portal inspired by a modern university student dashboard. It includes a React + Vite frontend, Express backend, secure demo authentication, protected routes, profile, result history, course history, class routine, billing, transport, pre-advising, notices, and settings.

> Important: This project does **not** include or store real Green University cookies, credentials, or private tokens. It ships with a safe mock backend and an adapter layer where an officially authorized university API can be connected later.

## Tech Stack

- React + Vite frontend
- React Router protected routes
- Axios API client with credentials enabled
- Express REST API backend
- HttpOnly cookie authentication using JWT
- Helmet, CORS, rate limit, cookie parser
- Responsive dashboard UI with CSS only

## Demo Credentials

```txt
Student ID: 23041
Password: Demo@1234
```

You can also login using:

```txt
Email: demo@student.green.edu.bd
Password: Demo@1234
```

## Quick Start

```bash
cd iron-student-portal
npm install
npm run dev
```

Frontend:

```txt
http://localhost:5173
```

Backend:

```txt
http://localhost:5000/api/health
```

## Manual Start

Terminal 1:

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Terminal 2:

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

## Project Structure

```txt
iron-student-portal/
  client/                 React + Vite frontend
  server/                 Express backend API
  README.md
  package.json
```

## Included Pages

- Login
- Dashboard
- Student Profile
- Course History
- Result History
- Class Routine
- Exam Routine
- Billing
- Pre Advising
- Transport Routes
- Notices
- Settings

## Backend API Routes

```txt
POST   /api/auth/login
GET    /api/auth/me
POST   /api/auth/logout
GET    /api/student/summary
GET    /api/student/profile
GET    /api/student/course-history
GET    /api/student/results
GET    /api/student/class-routine
GET    /api/student/exam-routine
GET    /api/student/billing
GET    /api/student/pre-advising
GET    /api/student/transport-routes
GET    /api/student/notices
GET    /api/student/settings
PUT    /api/student/settings
```

## Authorized API Integration Notes

Your captured portal endpoints looked like these:

```txt
/api/StudentInfo
/api/ClassRoutine
/api/StudentTransport/Routes
/api/PreAdvising/GetStudentPreAdvisingStatus
/api/PreAdvising/GetAutoOpenAssignCourse
/api/PreAdvising/GetStudentInstallmentBillingInfo?studentId={studentId}
```

Do not paste browser session cookies into this project. If the university gives you an official API key, OAuth client, service account, or server-to-server token, connect it in `server/src/services/authorizedPortal.service.js`.

## Security Notes

- No private cookies are stored in source code.
- Student ID is validated server-side.
- Frontend cannot choose another student's ID.
- Auth token is stored as an HttpOnly cookie.
- CORS is restricted to the configured frontend origin.

## Build

```bash
npm run build
```

The frontend production build will be created inside:

```txt
client/dist
```
