import { Router } from 'express';
import { getFormulas, getProgress, getQuestions, getSubjects, postProgress } from '../controllers/contentController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

export const contentRoutes = Router();

contentRoutes.get('/formulas', authMiddleware, getFormulas);
contentRoutes.get('/subjects', authMiddleware, getSubjects);
contentRoutes.get('/questions', authMiddleware, getQuestions);
contentRoutes.post('/progress', authMiddleware, postProgress);
contentRoutes.get('/progress', authMiddleware, getProgress);
