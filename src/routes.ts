import { Router } from "express";
import { CreateUserController } from "./controller/createUserController";

const routes = Router();

routes.post('/user', new CreateUserController().handle)

export {routes}