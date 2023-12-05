import { Request, Response } from "express";

export interface ProductControllerInterface {
    index(req: Request, res: Response): void;
    create(req: Request, res: Response): void;
    show(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
    destroy(req: Request, res: Response): void;
}