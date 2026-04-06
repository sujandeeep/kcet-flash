import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { contentService } from '../services/contentService';
import { useAuth } from '../hooks/useAuth';
import type { Question } from '../types';

export function QuizPage() {
  const { id = 'general' } = useParams();
  const { user } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = useMemo(() => questions[index], [questions, index]);

  const startQuiz = async () => {
    const data = await contentService.getQuestions(id);
    setQuestions(data);
    setStarted(true);
  };

  const answer = async (selectedIndex: number) => {
    if (!current) return;
    const nextScore = selectedIndex === current.correctAnswerIndex ? score + 1 : score;
    setScore(nextScore);

    if (index === questions.length - 1) {
      await contentService.createProgress({
        userId: user?.id ?? 'unknown',
        quizId: id,
        score: nextScore,
        total: questions.length,
        timestamp: new Date().toISOString(),
      });
      return;
    }

    setIndex((value) => value + 1);
  };

  if (!started) return <button onClick={startQuiz}>Start Quiz {id}</button>;
  if (!current) return <p>No questions found for this quiz.</p>;

  return (
    <main>
      <h1>Quiz: {id}</h1>
      <p>{current.prompt}</p>
      <ul>
        {current.options.map((option, optionIndex) => (
          <li key={option}>
            <button onClick={() => answer(optionIndex)}>{option}</button>
          </li>
        ))}
      </ul>
      <p>
        Question {index + 1}/{questions.length} | Score {score}
      </p>
    </main>
  );
}
