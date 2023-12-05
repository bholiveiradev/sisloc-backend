import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { JWT_SECRET, JWT_EXPIRES } = process.env;

export default class AuthService {
    generateToken(userId: number) {
        return jwt.sign({ userId }, JWT_SECRET!, { expiresIn: JWT_EXPIRES });
    }

    async comparePassword(candidatePassword: string, hashedPassword: string) {
        return await bcrypt.compare(candidatePassword, hashedPassword);
    }
}