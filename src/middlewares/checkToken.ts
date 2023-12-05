import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';

const { JWT_SECRET, JWT_EXPIRES } = process.env;

interface Payload extends JwtPayload {
    userId?: string | number | undefined;
    exp?: any|number|bigint|null;
}

interface AuthRequest extends Request {
    userId?: string | number | undefined;
}

export function checkToken(req: AuthRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace('Bearer', '').trim() || req.body.token;

    if (!token) {
        return res.status(401).json({ error: 'Token não enviado.' });
    }

    jwt.verify(token, JWT_SECRET!, (
        err: VerifyErrors | null,
        decoded: Payload | string | undefined
    ) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido.' }); 
        }

        if (!decoded || typeof decoded === 'string') {
            return res.status(401).json({ error: 'Erro ao decodificar o token.' });
        }

        const now = Date.now().valueOf() / 1000;
        if (decoded.exp - now < 300) {
            const newToken = jwt.sign({ userId: decoded.userId }, JWT_SECRET!, { expiresIn: JWT_EXPIRES });
            req.headers.authorization = newToken;
        }
        
        req.userId = decoded.userId;

        next();
    });
}