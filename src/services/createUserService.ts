import { AppDataSource } from "../data-source";
import { Users } from "../entities/userEntity";

type UserRequest = {
    name: string;
    lastName: string;
    email: string;
}

export class CreateUserService {
    async execute({ name, lastName, email }: UserRequest): Promise<Users | Error> {
        const repo = AppDataSource.getRepository(Users);
        const newUser = repo.create({ name, lastName, email, update_at: new Date(), created_at: new Date() });

        if (await repo.findOneBy({ email })) {
            return new Error('E-mail já cadastrado no sistema!');
        }

        repo.save(newUser);

        return newUser;
    }
} 