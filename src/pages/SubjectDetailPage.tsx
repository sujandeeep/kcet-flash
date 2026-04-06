import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { contentService } from '../services/contentService';
import type { Formula, Subject } from '../types';

export function SubjectDetailPage() {
  const { id } = useParams();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [formulas, setFormulas] = useState<Formula[]>([]);

  useEffect(() => {
    Promise.all([contentService.getSubjects(), contentService.getFormulas()]).then(([subjectData, formulaData]) => {
      setSubjects(subjectData);
      setFormulas(formulaData);
    });
  }, []);

  const subject = useMemo(() => subjects.find((item) => item.id === id), [subjects, id]);

  return (
    <main>
      <h1>{subject?.name ?? 'Subject'}</h1>
      <p>{subject?.description}</p>
      <h2>Formulas</h2>
      <ul>
        {formulas
          .filter((formula) => formula.subjectId === id)
          .map((formula) => (
            <li key={formula.id}>
              <Link to={`/formula/${formula.id}`}>{formula.title}</Link>
            </li>
          ))}
      </ul>
      <Link to={`/quiz/${id}`}>Take quiz for this subject</Link>
    </main>
  );
}
