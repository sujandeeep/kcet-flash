import type { Request, Response } from 'express';
import type { FormulaModel, ProgressModel, QuestionModel, SubjectModel } from '../models/types.js';
import { createDocument, getCollection, getWhere } from '../services/firestoreService.js';

export async function getSubjects(_req: Request, res: Response) {
  const subjects = await getCollection<SubjectModel>('subjects');
  return res.json(subjects);
}

export async function getFormulas(_req: Request, res: Response) {
  const formulas = await getCollection<FormulaModel>('formulas');
  return res.json(formulas);
}

export async function getQuestions(req: Request, res: Response) {
  const quizId = req.query.quizId as string | undefined;
  if (quizId) {
    const questions = await getWhere<QuestionModel>('questions', 'quizId', quizId);
    return res.json(questions);
  }

  const questions = await getCollection<QuestionModel>('questions');
  return res.json(questions);
}

export async function postProgress(req: Request, res: Response) {
  const payload = req.body as Omit<ProgressModel, 'id'>;
  const progress = await createDocument<ProgressModel>('progress', payload);
  return res.status(201).json(progress);
}

export async function getProgress(req: Request, res: Response) {
  const progress = await getWhere<ProgressModel>('progress', 'userId', req.auth!.userId);
  return res.json(progress);
}
