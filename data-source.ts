import { DataSource } from "typeorm";
import { CreateTableUser1668517173693 } from "./src/migrations/1668517173693-CreateTableUser";
import { CreateTableValues1668520561919 } from "./src/migrations/1668520561919-CreateTableValues";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Brasil1205!#",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [CreateTableUser1668517173693, CreateTableValues1668520561919],
})