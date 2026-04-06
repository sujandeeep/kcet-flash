# KCET Flash (Full-Stack)

Production-oriented full-stack KCET prep platform.

## Architecture

- **Frontend:** React + Vite + TypeScript (`/src`)
- **Backend:** Node.js + Express + TypeScript (`/backend`)
- **Database:** Firebase Firestore (`users`, `subjects`, `formulas`, `questions`, `progress`)
- **Auth:** JWT + email/password + Google OAuth + optional 2FA

## Frontend folder layout

```text
src/
  components/
  pages/
  services/
  hooks/
  utils/
  types/
  context/
```

## Backend folder layout

```text
backend/src/
  controllers/
  routes/
  middlewares/
  services/
  models/
  utils/
```

## API Endpoints

- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/google`
- `GET /formulas`
- `GET /subjects`
- `GET /questions`
- `POST /progress`
- `GET /progress`

## Dynamic routes

- `/subject/:id`
- `/formula/:id`
- `/quiz/:id`

## Environment variables

### Frontend (`.env`)

- `VITE_API_BASE_URL`
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_APP_ID`

### Backend (`backend/.env`)

- `PORT`
- `JWT_SECRET`
- `GOOGLE_CLIENT_ID`
- `CORS_ORIGIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

## Local development

```bash
npm install
npm --prefix backend install
npm run dev
npm run backend:dev
```

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: Firebase Firestore
