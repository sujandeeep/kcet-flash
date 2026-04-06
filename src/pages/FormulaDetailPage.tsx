import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { contentService } from '../services/contentService';
import type { Formula } from '../types';

export function FormulaDetailPage() {
  const { id } = useParams();
  const [formulas, setFormulas] = useState<Formula[]>([]);

  useEffect(() => {
    contentService.getFormulas().then(setFormulas);
  }, []);

  const formula = useMemo(() => formulas.find((item) => item.id === id), [formulas, id]);

  if (!formula) return <p>Loading formula...</p>;

  return (
    <main>
      <h1>{formula.title}</h1>
      <pre>{formula.expression}</pre>
      <p>{formula.notes}</p>
    </main>
  );
}
