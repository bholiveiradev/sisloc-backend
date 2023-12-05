import { Request, Response } from 'express';

import { AuthControllerInterface } from './contracts/AuthControllerInterface';

import AuthService from '../services/AuthService';
import { UserRepositoryInterface } from '../repositories/contracts/UserRepositoryInterface';

export default class AuthController implements AuthControllerInterface {
    public userRepository: UserRepositoryInterface;
    public authService: AuthService;

    constructor(userRepository: UserRepositoryInterface, authService: AuthService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
    
            const user = await this.userRepository.findByEmail(email);
    
            if (!user || !(await this.authService.comparePassword(password, user.password))) {
                return res.status(401).json({ error: 'Credenciais inválidas.' });
            }
    
            const token = this.authService.generateToken(user.id);
            res.json({ token });
        } catch (err) {
            console.log(err);
        }
    }
}