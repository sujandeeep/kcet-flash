import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { contentService } from '../services/contentService';
import type { Subject } from '../types';

export function SubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentService.getSubjects().then((data) => {
      setSubjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading subjects...</p>;

  return (
    <main>
      <h1>Subjects</h1>
      {subjects.map((subject) => (
        <article key={subject.id}>
          <h2>{subject.name}</h2>
          <p>{subject.description}</p>
          <Link to={`/subject/${subject.id}`}>Open subject</Link>
        </article>
      ))}
    </main>
  );
}
