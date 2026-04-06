export interface Subject {
  id: string;
  name: string;
  description?: string;
}

export interface Formula {
  id: string;
  subjectId: string;
  title: string;
  expression: string;
  notes?: string;
}

export interface Question {
  id: string;
  subjectId: string;
  quizId: string;
  prompt: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface Progress {
  id?: string;
  userId: string;
  quizId: string;
  score: number;
  total: number;
  timestamp: string;
}

export interface User {
  id: string;
  email: string;
  displayName?: string;
  twoFactorEnabled?: boolean;
}

export interface AuthPayload {
  user: User;
  token: string;
  requiresTwoFactor?: boolean;
  twoFactorToken?: string;
}
