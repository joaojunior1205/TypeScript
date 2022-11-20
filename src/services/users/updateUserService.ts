import { hash } from "bcrypt";
import { networkInterfaces } from "os";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/userEntity";

export class UpdateUserService {
    async execute({id, name, last_name, email, password}) {
        let passwordHash;

        if (password) {
            passwordHash = await hash(password, 8);
        }

        const query = `SELECT * FROM users WHERE id = '${id}'`;

        const getUser = await AppDataSource.getRepository(Users).query(query);

        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds

        const updateUser = {
            id: getUser[0]?.id,
            name: name ? name : getUser[0]?.name,
            last_name: last_name ? last_name : getUser[0]?.last_name,
            email: email ? email : getUser[0]?.email,
            password: password ? passwordHash : getUser[0]?.password,
            update_at: (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1),
            created_at: getUser[0]?.created_at,
            token: getUser[0]?.token
        };

        const queryUpdate = `
        UPDATE users
        SET name = '${updateUser.name}', last_name = '${updateUser.last_name}', email = '${updateUser.email}', password = '${updateUser.password}', update_at = '${updateUser.update_at}'
        WHERE id = '${id}'`;

        await AppDataSource.getRepository(Users).query(queryUpdate);

        return updateUser;
    }
}