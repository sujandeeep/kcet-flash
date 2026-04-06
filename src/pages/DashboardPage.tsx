import { Link } from 'react-router-dom';

export function DashboardPage() {
  return (
    <main>
      <h1>KCET Flash Dashboard</h1>
      <p>All data is loaded dynamically from the backend API and Firestore.</p>
      <ul>
        <li><Link to="/subjects">Browse subjects</Link></li>
        <li><Link to="/formulas">Browse formulas</Link></li>
        <li><Link to="/quiz/general">Start quiz</Link></li>
      </ul>
    </main>
  );
}
