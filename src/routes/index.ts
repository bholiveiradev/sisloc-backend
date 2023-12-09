import express, { Request, Response } from 'express';

import { productRoutes } from './productRoutes';
import { authRoutes } from './authRoutes';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/login', authRoutes);

router.get('/', (req: Request, res: Response) => {
    res.json({ title: 'Api is online', message: 'Hi sisloc api!!!' });
});

export { router as apiRouter };