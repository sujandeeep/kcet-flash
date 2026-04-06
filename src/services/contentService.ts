import type { Formula, Progress, Question, Subject } from '../types';
import { api } from './api';

export const contentService = {
  getSubjects: () => api.get<Subject[]>('/subjects').then((r) => r.data),
  getFormulas: () => api.get<Formula[]>('/formulas').then((r) => r.data),
  getQuestions: (quizId?: string) =>
    api.get<Question[]>('/questions', { params: quizId ? { quizId } : {} }).then((r) => r.data),
  createProgress: (progress: Progress) => api.post('/progress', progress).then((r) => r.data),
  getProgress: () => api.get<Progress[]>('/progress').then((r) => r.data),
};
