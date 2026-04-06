import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function AppLayout() {
  const { user, logout } = useAuth();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Dashboard</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/formulas">Formulas</Link>
          <Link to="/quiz/general">Quiz</Link>
          <Link to="/progress">Progress</Link>
        </nav>
        <div>
          {user?.email} <button onClick={logout}>Logout</button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
