import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from "typeorm";
import { Users } from './entities/userEntity';
import { Values } from './entities/valueEntity';
import { CreateTableUser1668517173693 } from './database/migrations/1668517173693-CreateTableUser';
import { CreateTableValues1668520561919 } from './database/migrations/1668520561919-CreateTableValues';

const port = Number(process.env.DB_PORT) as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
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
});
