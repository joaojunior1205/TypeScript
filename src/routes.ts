import { Router } from "express";
import { CreateUserController } from "./controller/users/createUserController";
import { GetAllUserController, GetUserController } from "./controller/users/getUserController";

const routes = Router();

routes.post('/user', new CreateUserController().handle);
routes.get('/user', new GetAllUserController().getAll);
routes.get('/user/:id', new GetUserController().get);

export {routes}