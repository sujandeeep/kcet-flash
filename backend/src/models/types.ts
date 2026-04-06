export interface UserModel {
  id: string;
  email: string;
  passwordHash?: string;
  displayName?: string;
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string;
  provider: 'password' | 'google';
  createdAt: string;
}

export interface SubjectModel {
  id: string;
  name: string;
  description?: string;
}

export interface FormulaModel {
  id: string;
  subjectId: string;
  title: string;
  expression: string;
  notes?: string;
}

export interface QuestionModel {
  id: string;
  subjectId: string;
  quizId: string;
  prompt: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface ProgressModel {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  total: number;
  timestamp: string;
}
