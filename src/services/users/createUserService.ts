import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/userEntity";

type UserRequest = {
    name: string;
    last_name: string;
    email: string;
    password: string;
}

export class CreateUserService {
    async execute({ name, last_name, email, password }: UserRequest): Promise<Users | Error> {
        const passwordHash = await hash(password, 8); // cryptografia da senha, recebe o param senha e indica o nível, que no caso é 8.
        
        const repo = AppDataSource.getRepository(Users);

        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds

        const newUser = repo.create({
            name, 
            last_name, 
            email, 
            password: passwordHash, 
            update_at: (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1),
            created_at: (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1),
        });

        if (await repo.findOneBy({ email })) {
            return new Error('E-mail já cadastrado no sistema!');
        }

        repo.save(newUser);

        return newUser;
    }
}