import express, { Request, Response } from 'express';

import ProductRepository from '../repositories/ProductRepository';
import ProductController from '../controllers/ProductController';

import { checkToken } from '../middlewares/checkToken';

const router = express.Router();    

const productController = new ProductController(
  new ProductRepository()
);

router.use(checkToken);

router.get('/', (req: Request, res: Response) => productController.index(req, res));
router.post('/', (req: Request, res: Response) => productController.create(req, res));
router.get('/:id', (req: Request, res: Response) => productController.show(req, res));
router.put('/:id', (req: Request, res: Response) => productController.update(req, res));
router.delete('/:id', (req: Request, res: Response) => productController.destroy(req, res));

export { router as productRoutes };
