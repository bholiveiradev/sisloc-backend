
import { Request } from 'express';
import { Product } from '../../models';

export interface ProductRepositoryInterface {
    getProducts(): Promise<Product[]>;
    createProduct(req: Request): Promise<Product>;
    findByKey(id: number): Promise<Product | null>;
    update(req: Request, id: number): Promise<Product | null>;
    delete(id: number): Promise<boolean | void>;
}