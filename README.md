# Iron Student Portal

A complete React + Express student portal with a modern education UI inspired by the provided legacy GUB portal screenshots. It keeps the familiar academic flow while upgrading the interface with responsive cards, clean tables, protected routes, and API-ready backend structure.

> This project does **not** include real Green University cookies, browser session data, private tokens, or scraped student credentials. It ships with safe demo/mock data and can later be connected to an officially authorized university API.

## Tech Stack

- React + Vite frontend
- React Router protected routes
- Axios API client with credentials enabled
- Express REST API backend
- HttpOnly JWT cookie authentication
- Helmet, CORS, rate limit, cookie parser
- Responsive CSS-only modern edu UI

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

## Included Portal Pages

- Login
- Home dashboard
- Result History
- Bill History
- Course Evaluation
- Student Transport Service
- Pre-Registration
- Registration Confirmation
- Student Profile
- Class Routine
- Password Change
- Course Drop
- Semester Drop
- Student Program Change
- Student Admit Card
- Student Special Exam Apply
- Student Exam Routine
- Teams User ID Password
- Notice Board and Settings routes are still included for extensibility

## Backend API Routes

```txt
POST   /api/auth/login
GET    /api/auth/me
POST   /api/auth/logout
GET    /api/student/summary
GET    /api/student/profile
GET    /api/student/results
GET    /api/student/course-history
GET    /api/student/billing
GET    /api/student/course-evaluation
GET    /api/student/transport-routes
GET    /api/student/pre-advising
GET    /api/student/registration-confirmation
GET    /api/student/class-routine
GET    /api/student/exam-routine
GET    /api/student/course-drop
GET    /api/student/semester-drop
GET    /api/student/program-change
GET    /api/student/documents
GET    /api/student/teams-info
GET    /api/student/notices
GET    /api/student/settings
PUT    /api/student/settings
```

## Deployment Notes

Frontend on Vercel:

```txt
Root Directory: client
Build Command: npm run build
Output Directory: dist
Environment: VITE_API_BASE_URL=https://your-backend.onrender.com/api
```

Backend on Render:

```txt
Root Directory: server
Build Command: npm install
Start Command: npm start
```

Required backend environment variables:

```env
NODE_ENV=production
JWT_SECRET=your_strong_random_secret
COOKIE_NAME=iron_portal_session
CLIENT_ORIGIN=https://your-vercel-app.vercel.app
CLIENT_ORIGINS=https://your-vercel-app.vercel.app
EXTERNAL_PORTAL_ENABLED=false
```

Health check:

```txt
https://your-backend.onrender.com/api/health
```

Debug routes:

```txt
https://your-backend.onrender.com/api/debug/routes
```

## Security Notes

- No real portal cookies or access tokens are included.
- Auth token is stored in an HttpOnly cookie.
- Cross-site production cookie settings are configured for Vercel + Render.
- Student data is served from a controlled mock backend.
- Student ID access is validated on the server side.
