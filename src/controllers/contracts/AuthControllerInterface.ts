import { Request, Response } from "express";

export interface AuthControllerInterface {
    login(req: Request, res: Response): void;
}