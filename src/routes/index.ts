import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import { productRoutes } from './productRoutes';
import { authRoutes } from './authRoutes';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/login', authRoutes);

router.get('/generatePassword', async (req: Request, res: Response) => {
    const hash = await bcrypt.hash('123Fred', 10);
    res.json({ hash })
});

router.get('/', (req: Request, res: Response) => {
    res.json({ title: 'Api is online', message: 'Hi sisloc api!!!' });
});

export { router as apiRouter };