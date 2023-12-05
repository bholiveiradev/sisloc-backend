import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Erro interno:', err);
    res.status(500).json({ error: 'Erro interno na aplicação.' });
};

export default errorHandler;