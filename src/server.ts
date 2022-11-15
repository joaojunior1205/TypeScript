import "reflect-metadata";
import express from "express";
import { routes } from "./routes";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => {
        const app = express();
        const port = 3000;

        app.use(express.json());
        app.use(routes)

        app.listen(port, () => {
            console.log(`Server running in port ${port}`)
        });
    })
