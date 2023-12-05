import { User } from "../models";
import { UserRepositoryInterface } from "./contracts/UserRepositoryInterface";

export default class UserRepository implements UserRepositoryInterface {

    async findByEmail(email: string) {
        if (email) {
            return await User.findOne({ where: { email } });
        }
        return null;
    }
}
