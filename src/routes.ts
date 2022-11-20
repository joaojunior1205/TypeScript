import { Router } from "express";
import { CreateUserController } from "./controller/users/createUserController";
import { GetAllUserController, GetUserController } from "./controller/users/getUserController";
import { UpdateUserController } from "./controller/users/updateUserController";

const routes = Router();

routes.post('/user', new CreateUserController().handle);
routes.get('/user', new GetAllUserController().getAll);
routes.get('/user/:id', new GetUserController().get);
routes.put('/user/:id', new UpdateUserController().updateUser);

export {routes}