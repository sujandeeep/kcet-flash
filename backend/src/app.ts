import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { authRoutes } from './routes/authRoutes.js';
import { contentRoutes } from './routes/contentRoutes.js';
import { auditMiddleware } from './middlewares/auditMiddleware.js';

dotenv.config();

export const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*' }));
app.use(express.json());
app.use(auditMiddleware);

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/auth', authRoutes);
app.use('/', contentRoutes);
