import { Router } from 'express';
import { google, login, register, setupTwoFactor } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

export const authRoutes = Router();

authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.post('/google', google);
authRoutes.post('/2fa/setup', authMiddleware, setupTwoFactor);
