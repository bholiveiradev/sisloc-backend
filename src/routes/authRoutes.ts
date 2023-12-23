import express, { Request, Response } from 'express';

import UserRepository from '../repositories/UserRepository';
import AuthController from '../controllers/AuthController';

import AuthService from '../services/AuthService';

const router = express.Router();

const authController = new AuthController(
  new UserRepository(),
  new AuthService()
);

router.post('/', (req: Request, res: Response) => authController.login(req, res));

export { router as authRoutes };
