import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/userEntity";

export class GetAllUserService {
    async execute() {
        const query = `SELECT id, name,  email, last_name, created_at, update_at FROM users`;

        const runQuery = await AppDataSource
        .getRepository(Users)
        .query(query);
        
        return runQuery;
    }
}

export class GetUserService {
    async execute(id: string) {
        const query = `SELECT id, name,  email, last_name, created_at, update_at FROM users WHERE id = '${id}'`;

        const runQuery = await AppDataSource
        .getRepository(Users)
        .query(query);

        return runQuery;
    }
}