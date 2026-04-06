import { useEffect, useState } from 'react';
import { contentService } from '../services/contentService';
import type { Progress } from '../types';

export function ProgressPage() {
  const [progress, setProgress] = useState<Progress[]>([]);

  useEffect(() => {
    contentService.getProgress().then(setProgress);
  }, []);

  return (
    <main>
      <h1>Progress</h1>
      <ul>
        {progress.map((entry) => (
          <li key={entry.id || `${entry.quizId}-${entry.timestamp}`}>
            {entry.quizId}: {entry.score}/{entry.total} at {new Date(entry.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </main>
  );
}
