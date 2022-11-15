import 'reflect-metadata';
import { DataSource } from "typeorm";
import { CreateTableUser1668517173693 } from "./src/database/migrations/1668517173693-CreateTableUser";
import { CreateTableValues1668520561919 } from "./src/database/migrations/1668520561919-CreateTableValues";
import { Users } from "./src/entities/userEntity";
import { Values } from "./src/entities/valueEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Brasil1205!#",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [
        Users,
        Values
    ],
    subscribers: [],
    migrations: [
        CreateTableUser1668517173693,
        CreateTableValues1668520561919
    ],
})

export async function startDB() {
    try {
        await AppDataSource.initialize();
    } catch (err) {
        console.error("Error during Data Source initialization", err);
    }
}
