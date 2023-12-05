import { User } from '../../models';

export interface UserRepositoryInterface {
    findByEmail(email: string): Promise<User | null>;
}