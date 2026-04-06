import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { contentService } from '../services/contentService';
import type { Formula } from '../types';

export function FormulasPage() {
  const [formulas, setFormulas] = useState<Formula[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentService.getFormulas().then((data) => {
      setFormulas(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading formulas...</p>;

  return (
    <main>
      <h1>Formulas</h1>
      <ul>
        {formulas.map((formula) => (
          <li key={formula.id}>
            <Link to={`/formula/${formula.id}`}>{formula.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
