import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { AppLayout } from '../components/AppLayout';
import { AuthGuard } from '../components/AuthGuard';
import { DashboardPage } from './DashboardPage';
import { FormulaDetailPage } from './FormulaDetailPage';
import { FormulasPage } from './FormulasPage';
import { LoginPage } from './LoginPage';
import { ProgressPage } from './ProgressPage';
import { QuizPage } from './QuizPage';
import { RegisterPage } from './RegisterPage';
import { SubjectDetailPage } from './SubjectDetailPage';
import { SubjectsPage } from './SubjectsPage';

export function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/"
            element={
              <AuthGuard>
                <AppLayout />
              </AuthGuard>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="subjects" element={<SubjectsPage />} />
            <Route path="subject/:id" element={<SubjectDetailPage />} />
            <Route path="formulas" element={<FormulasPage />} />
            <Route path="formula/:id" element={<FormulaDetailPage />} />
            <Route path="quiz/:id" element={<QuizPage />} />
            <Route path="progress" element={<ProgressPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
